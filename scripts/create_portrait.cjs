const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createPerfectPortrait() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const publicDir = path.join(__dirname, '..', 'public');

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rawBuffer = Buffer.from(data);

  // Clean any green tint or text in the raw image
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = rawBuffer[idx];
      const g = rawBuffer[idx + 1];
      const b = rawBuffer[idx + 2];

      // Green detection
      const isGreen = (g > 50 && g > r * 1.15 && g > b * 1.05) || (g > 70 && g > r);
      // White text in badge region
      const isWhiteText = (y > 220 && x < 260 && r > 160 && g > 160 && b > 160);

      if (isGreen || isWhiteText) {
        if (x < 110 && y < 270) {
          // Left side background / upper sleeve: dark navy/charcoal
          rawBuffer[idx] = 20;
          rawBuffer[idx + 1] = 24;
          rawBuffer[idx + 2] = 48;
        } else if (y >= 260 && x < 180) {
          // Sleeve navy blue
          rawBuffer[idx] = 24;
          rawBuffer[idx + 1] = 36;
          rawBuffer[idx + 2] = 85;
        } else {
          // Desk area
          rawBuffer[idx] = 42;
          rawBuffer[idx + 1] = 36;
          rawBuffer[idx + 2] = 32;
        }
      }
    }
  }

  // 1. Process cleaned full 400x400
  const cleanedFull = await sharp(rawBuffer, { raw: { width: info.width, height: info.height, channels: 3 } })
    .blur(0.4)
    .toBuffer();

  // 2. Crop to 4:5 executive framing (left: 65, top: 0, width: 270, height: 337.5)
  // Upscale to 1080x1350 (standard high-res 4:5 portrait) with advanced sharpening and contrast enhancement
  await sharp(cleanedFull, { raw: { width: info.width, height: info.height, channels: 3 } })
    .extract({ left: 65, top: 0, width: 270, height: 337 })
    .resize(1080, 1350, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 1.3,
      m1: 1.8,
      m2: 0.6
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.06
    })
    .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
    .toFile(path.join(publicDir, 'san-alves-profile-upscaled.jpg'));

  // Also create a 1200x1200 high-res version of the full cleaned image
  await sharp(cleanedFull, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(1200, 1200, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.2 })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'sandroalves.jpg'));

  // Also copy to profile.jpg and sanalves.jpg so all references are clean
  fs.copyFileSync(path.join(publicDir, 'san-alves-profile-upscaled.jpg'), path.join(publicDir, 'sanalves.jpg'));
  fs.copyFileSync(path.join(publicDir, 'san-alves-profile-upscaled.jpg'), path.join(publicDir, 'profile.jpg'));

  console.log('Created high-res clean executive portraits');
}

createPerfectPortrait().catch(console.error);
