import os
import urllib.request
import cv2
import numpy as np

def run_neural_super_resolution():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    models_dir = os.path.join(base_dir, "models")
    os.makedirs(models_dir, exist_ok=True)
    
    # 1. Download pretrained neural super-resolution models if not present
    # EDSR (Enhanced Deep Residual Networks for Single Image Super-Resolution) - 4x scale
    edsr_path = os.path.join(models_dir, "EDSR_x4.pb")
    edsr_url = "https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x4.pb"
    
    # FSRCNN (Fast Super-Resolution Convolutional Neural Network) - 4x scale
    fsrcnn_path = os.path.join(models_dir, "FSRCNN_x4.pb")
    fsrcnn_url = "https://github.com/Saafke/FSRCNN_Tensorflow/raw/master/models/FSRCNN_x4.pb"

    if not os.path.exists(fsrcnn_path):
        print("Downloading FSRCNN_x4 model...")
        urllib.request.urlretrieve(fsrcnn_url, fsrcnn_path)
        print("FSRCNN downloaded.")

    if not os.path.exists(edsr_path):
        print("Downloading EDSR_x4 model (~38MB, state of the art)...")
        urllib.request.urlretrieve(edsr_url, edsr_path)
        print("EDSR downloaded.")

    public_dir = os.path.join(base_dir, "..", "public")
    
    # Load pristine crop
    input_path = os.path.join(public_dir, "san-alves-portrait.jpg")
    img = cv2.imread(input_path)
    
    print(f"Input image shape: {img.shape}")
    
    # We will use EDSR x4 model with cv2.dnn
    # EDSR takes Y channel in YCrCb or BGR directly
    net = cv2.dnn.readNetFromTensorflow(edsr_path)
    
    # Preprocess
    blob = cv2.dnn.blobFromImage(img, 1.0, (img.shape[1], img.shape[0]), (0, 0, 0), swapRB=False, crop=False)
    net.setInput(blob)
    
    print("Running EDSR neural forward pass...")
    out = net.forward()
    
    # Reshape and postprocess output
    out = out.squeeze(0).transpose(1, 2, 0)
    out = np.clip(out, 0, 255).astype(np.uint8)
    
    print(f"Super-resolved shape: {out.shape}")
    
    # Apply advanced professional portrait post-processing:
    # 1. Edge-preserving detail enhancement
    enhanced = cv2.detailEnhance(out, sigma_s=10, sigma_r=0.15)
    
    # 2. Subtle bilateral filter to remove any noise while keeping facial edges razor-sharp
    smooth_edges = cv2.bilateralFilter(enhanced, d=7, sigmaColor=35, sigmaSpace=35)
    
    # 3. Smart unsharp mask for crystal clear eyes, glasses and suit texture
    gaussian = cv2.GaussianBlur(smooth_edges, (0, 0), 2.0)
    unsharp = cv2.addWeighted(smooth_edges, 1.35, gaussian, -0.35, 0)
    
    # Save output
    output_path = os.path.join(public_dir, "san-alves-portrait.jpg")
    cv2.imwrite(output_path, unsharp, [cv2.IMWRITE_JPEG_QUALITY, 98])
    cv2.imwrite(os.path.join(public_dir, "sandroalves.jpg"), unsharp, [cv2.IMWRITE_JPEG_QUALITY, 98])
    cv2.imwrite(os.path.join(public_dir, "profile.jpg"), unsharp, [cv2.IMWRITE_JPEG_QUALITY, 98])
    cv2.imwrite(os.path.join(public_dir, "sanalves.jpg"), unsharp, [cv2.IMWRITE_JPEG_QUALITY, 98])
    
    print("Neural Super-Resolution & Portrait Polish complete!")

if __name__ == "__main__":
    run_neural_super_resolution()
