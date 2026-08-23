const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function testRestore() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const publicDir = path.join(__dirname, '..', 'public');

  // Option 1: Clean Executive Portrait Crop (3:4 / 4:5 aspect ratio)
  // Focuses perfectly on head, smile, glasses, shoulders and upper suit
  // Crop area: left 60, top 10, width 280, height 350 -> exactly 4:5 aspect ratio
  // Upscaled with Lanczos3 + Smart Sharpening + Contrast enhancement to 1120x1400 px!
  await sharp(inputPath)
    .extract({ left: 60, top: 10, width: 280, height: 350 })
    .resize(1120, 1400, {
      kernel: sharp.kernel.lanczos3,
      fastShrinkOnLoad: false
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.5,
      m2: 0.7,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.05
    })
    .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
    .toFile(path.join(publicDir, 'san-alves-portrait.jpg'));

  // Option 2: Full Frame (400x400 -> 1600x1600) with inpainting/color correction for the green area
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rawBuffer = Buffer.from(data);

  // Analyze and replace green pixels
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = rawBuffer[idx];
      const g = rawBuffer[idx + 1];
      const b = rawBuffer[idx + 2];

      // Detect LinkedIn green badge (strong green dominance or bright white text in the badge region)
      const isGreenBadge = (g > 60 && g > r * 1.2 && g > b * 1.1) || 
                           (y > 180 && x < 100 && g > r && g > b) ||
                           (y > 280 && x < 280 && (g > 55 && g > r * 1.15));

      // White letters inside the badge area
      const isWhiteTextInBadge = (y > 200 && x < 260 && r > 180 && g > 180 && b > 180);

      if (isGreenBadge || isWhiteTextInBadge) {
        // If in upper-left background region (y < 220, x < 70), blend with dark background
        if (y < 220 && x < 70) {
          rawBuffer[idx] = 32;     // R
          rawBuffer[idx + 1] = 34; // G
          rawBuffer[idx + 2] = 38; // B
        } else if (y >= 220 && y < 330 && x < 150) {
          // Left suit arm: blend with navy suit color (approx R: 22, G: 32, B: 75)
          rawBuffer[idx] = 22;
          rawBuffer[idx + 1] = 34;
          rawBuffer[idx + 2] = 78;
        } else {
          // Lower desk / hands area: blend with dark office desk / shadow
          rawBuffer[idx] = 28;
          rawBuffer[idx + 1] = 30;
          rawBuffer[idx + 2] = 35;
        }
      }
    }
  }

  // Save the color-repaired and upscaled full image
  await sharp(rawBuffer, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(1600, 1600, {
      kernel: sharp.kernel.lanczos3
    })
    .median(1) // smooth any inpaint edges
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'san-alves-full-restored.jpg'));

  console.log('Generated test images');
}

testRestore().catch(console.error);
