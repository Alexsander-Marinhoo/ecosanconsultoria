const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function createFlawlessHeadshot() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'sandroalves.jpg');

  // Reset to original
  execSync('git checkout HEAD -- public/sandroalves.jpg', { cwd: path.join(__dirname, '..') });

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const raw = Buffer.from(data);

  // 1. Soft inpaint on the original 400x400
  // For each pixel in the badge region:
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = raw[idx];
      const g = raw[idx + 1];
      const b = raw[idx + 2];

      const isBadgeRegion = (x < 110 && y > 60) || (x < 220 && y > 230) || (x < 360 && y > 320);
      const isGreenish = (g > 35 && g > r * 0.95 && g > b * 0.85) || (g > 60);
      const isWhiteText = (r > 130 && g > 130 && b > 130 && x < 280 && y > 200);

      if (isBadgeRegion && (isGreenish || isWhiteText || (x < 55 && y > 150))) {
        // Left background: x < 70, y < 220
        if (y < 220 && x < 70) {
          raw[idx] = 34;
          raw[idx + 1] = 36;
          raw[idx + 2] = 40;
        }
        // Left suit sleeve:
        else if (y >= 200 && y < 330 && x < 150) {
          // Gradient matching navy blazer
          const t = (y - 200) / 130;
          raw[idx] = Math.round(18 * (1 - t) + 14 * t);
          raw[idx + 1] = Math.round(28 * (1 - t) + 22 * t);
          raw[idx + 2] = Math.round(72 * (1 - t) + 54 * t);
        }
        // Desk & lower shadow
        else {
          raw[idx] = 30;
          raw[idx + 1] = 28;
          raw[idx + 2] = 30;
        }
      }
    }
  }

  // 2. High-Quality Executive Headshot (4:5 Ratio)
  // Framing: left: 60, top: 0, width: 280, height: 350
  // Upscaled with Lanczos3 (3.5x) to 980x1225 with smooth lighting, contrast curve and edge sharpening
  const headshot = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 3 } })
    .extract({ left: 60, top: 0, width: 280, height: 350 })
    .resize(980, 1225, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 1.1,
      m1: 1.5,
      m2: 0.5
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.06
    })
    .jpeg({ quality: 97, chromaSubsampling: '4:4:4' })
    .toBuffer();

  // Save headshot
  fs.writeFileSync(path.join(publicDir, 'san-alves-portrait.jpg'), headshot);
  fs.writeFileSync(path.join(publicDir, 'sandroalves.jpg'), headshot);
  fs.writeFileSync(path.join(publicDir, 'sanalves.jpg'), headshot);
  fs.writeFileSync(path.join(publicDir, 'profile.jpg'), headshot);

  console.log('Flawless headshot created!');
}

createFlawlessHeadshot().catch(console.error);
