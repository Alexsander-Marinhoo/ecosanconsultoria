import os
import cv2
import numpy as np
import onnxruntime as ort
from PIL import Image

def run_pipeline():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(base_dir, "..", "public")
    model_path = os.path.join(base_dir, "models", "super_res.onnx")

    # Load pristine source crop
    input_path = os.path.join(public_dir, "sandroalves.jpg")
    img_bgr = cv2.imread(input_path)

    print(f"Loaded image shape: {img_bgr.shape}")

    # Convert to YCrCb (OpenCV uses Y, Cr, Cb order)
    img_ycrcb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2YCrCb)
    y_channel = img_ycrcb[:, :, 0]
    cr_channel = img_ycrcb[:, :, 1]
    cb_channel = img_ycrcb[:, :, 2]

    # Resize Y to 224x224 for the SubPixel CNN ONNX model
    orig_h, orig_w = y_channel.shape
    target_w, target_h = 224, 224
    y_resized = cv2.resize(y_channel, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)

    # Normalize to 0..1 float32
    y_input = y_resized.astype(np.float32) / 255.0
    y_input = np.expand_dims(np.expand_dims(y_input, axis=0), axis=0) # [1, 1, 224, 224]

    # Run ONNX inference
    session = ort.InferenceSession(model_path)
    ort_inputs = {session.get_inputs()[0].name: y_input}
    ort_outs = session.run(None, ort_inputs)

    y_sr = ort_outs[0].squeeze(0).squeeze(0) # [672, 672]
    y_sr = np.clip(y_sr * 255.0, 0, 255).astype(np.uint8)

    # Resize to final target dimensions: 1080x1350 (4:5 portrait)
    final_w, final_h = 1080, 1350
    y_final = cv2.resize(y_sr, (final_w, final_h), interpolation=cv2.INTER_LANCZOS4)
    cr_final = cv2.resize(cr_channel, (final_w, final_h), interpolation=cv2.INTER_LANCZOS4)
    cb_final = cv2.resize(cb_channel, (final_w, final_h), interpolation=cv2.INTER_LANCZOS4)

    # Recombine YCrCb
    merged_ycrcb = cv2.merge([y_final, cr_final, cb_final])
    sr_bgr = cv2.cvtColor(merged_ycrcb, cv2.COLOR_YCrCb2BGR)

    print("Post-processing: Detail enhancement & Studio sharpening...")

    # 1. Edge-preserving smoothing to remove any noise/compression artifacts
    smooth = cv2.edgePreservingFilter(sr_bgr, flags=1, sigma_s=40, sigma_r=0.2)

    # 2. Detail enhancement
    detail = cv2.detailEnhance(smooth, sigma_s=12, sigma_r=0.15)

    # 3. CLAHE on L channel of LAB for executive portrait contrast
    lab = cv2.cvtColor(detail, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.6, tileGridSize=(8, 8))
    l_clahe = clahe.apply(l)
    lab_enhanced = cv2.merge([l_clahe, a, b])
    contrast_bgr = cv2.cvtColor(lab_enhanced, cv2.COLOR_LAB2BGR)

    # 4. Smart Unsharp Masking
    gaussian = cv2.GaussianBlur(contrast_bgr, (0, 0), 1.5)
    final_output = cv2.addWeighted(contrast_bgr, 1.35, gaussian, -0.35, 0)

    # Save to all target files
    out_paths = [
        os.path.join(public_dir, "san-alves-portrait.jpg"),
        os.path.join(public_dir, "sandroalves.jpg"),
        os.path.join(public_dir, "profile.jpg"),
        os.path.join(public_dir, "sanalves.jpg")
    ]

    for p in out_paths:
        cv2.imwrite(p, final_output, [cv2.IMWRITE_JPEG_QUALITY, 98])
        print(f"Saved: {p}")

    print("AI Super-Resolution pipeline finished successfully!")

if __name__ == "__main__":
    run_pipeline()
