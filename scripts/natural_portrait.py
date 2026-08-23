import os
import cv2
import numpy as np

def create_natural_portrait():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(base_dir, "..", "public")
    backup_path = os.path.join(public_dir, "assets", "sandroalves_original.jpg")

    img = cv2.imread(backup_path)
    print(f"Original image size: {img.shape}")

    # Crop to authentic executive 4:5 headshot: left 82, top 15, w 236, h 295
    crop = img[15:15+295, 82:82+236].copy()

    # Clean any residual badge pixels on bottom-left and bottom-right
    ch, cw = crop.shape[:2]
    for y in range(ch):
        for x in range(cw):
            b, g, r = crop[y, x]
            # Bottom-left corner
            if x < 45 and y > 200 and (g > 35 and g > r * 1.02):
                crop[y, x] = [70, 30, 20] # Navy suit in BGR
            # Bottom-right residual green tint
            if x > 160 and y > 260 and (g > 35 and g > r * 1.02):
                crop[y, x] = [65, 28, 18]

    # 1. Advanced Non-Local Means Denoising to eliminate compression artifacts
    denoised = cv2.fastNlMeansDenoisingColored(crop, None, h=3, hColor=3, templateWindowSize=7, searchWindowSize=21)

    # 2. 4x Super-Resolution Upscale using INTER_LANCZOS4 to 944x1180
    target_w, target_h = 944, 1180
    upscaled = cv2.resize(denoised, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)

    # 3. Gentle bilateral skin-smoothing while keeping sharp edges
    bilateral = cv2.bilateralFilter(upscaled, d=5, sigmaColor=20, sigmaSpace=20)

    # 4. Subtle Photographic Sharpening (Unsharp Mask)
    blur = cv2.GaussianBlur(bilateral, (0, 0), sigmaX=1.0)
    sharpened = cv2.addWeighted(bilateral, 1.25, blur, -0.25, 0)

    # 5. Natural color balance & gentle warmth
    float_img = sharpened.astype(np.float32) / 255.0
    contrast_img = np.clip(1.03 * (float_img - 0.5) + 0.51, 0, 1)
    final_img = (contrast_img * 255.0).astype(np.uint8)

    # Save
    paths = [
        os.path.join(public_dir, "san-alves-portrait.jpg"),
        os.path.join(public_dir, "sandroalves.jpg"),
        os.path.join(public_dir, "profile.jpg"),
        os.path.join(public_dir, "sanalves.jpg")
    ]

    for p in paths:
        cv2.imwrite(p, final_img, [cv2.IMWRITE_JPEG_QUALITY, 98])
        print(f"Saved: {p}")

    print("Spotless natural portrait created successfully!")

if __name__ == "__main__":
    create_natural_portrait()
