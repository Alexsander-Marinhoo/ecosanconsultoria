const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function cleanCompletely() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const publicDir = path.join(__dirname, '..', 'public');

  // Restore pristine first
  const { execSync } = require('child_process');
  execSync('git checkout HEAD -- public/sandroalves.jpg', { cwd: path.join(__dirname, '..') });

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const raw = Buffer.from(data);

  // Analyze: The green badge is located strictly in the lower-left arc
  // In the 400x400 space:
  // Center of badge is around bottom-left (x=0, y=400)
  // Distance from bottom-left (0, 400): d = sqrt(x^2 + (400 - y)^2)
  // Outer circle radius is ~400, inner circle radius is ~210
  // When d is between 180 and 420 and x < 350 and y > 60:
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = raw[idx];
      const g = raw[idx + 1];
      const b = raw[idx + 2];

      const dBottomLeft = Math.sqrt(x * x + (400 - y) * (400 - y));

      // Any green or badge pixel in the badge arc (d between 160 and 420, in left/bottom area)
      const isBadgeRegion = (x < 120 && y > 60) || (x < 240 && y > 240) || (x < 360 && y > 320);
      const isGreenish = (g > 35 && g > r * 0.95 && g > b * 0.85 && (g > 50 || g > r)) || (g > 60);
      const isWhiteText = (r > 130 && g > 130 && b > 130 && x < 280 && y > 200);

      if (isBadgeRegion && (isGreenish || isWhiteText || (x < 60 && y > 150))) {
        // Upper background (left wall): x < 70, y < 220
        if (y < 220 && x < 70) {
          const grain = ((x * 13 + y * 7) % 5) - 2;
          raw[idx] = Math.max(0, Math.min(255, 33 + grain));
          raw[idx + 1] = Math.max(0, Math.min(255, 34 + grain));
          raw[idx + 2] = Math.max(0, Math.min(255, 38 + grain));
        }
        // Left suit shoulder/sleeve: y >= 200 && y < 330 && x < 150
        else if (y >= 200 && y < 330 && x < 150) {
          const grain = ((x * 17 + y * 11) % 7) - 3;
          // Rich navy blue matching right blazer sleeve
          raw[idx] = Math.max(0, Math.min(255, 18 + grain));
          raw[idx + 1] = Math.max(0, Math.min(255, 28 + grain));
          raw[idx + 2] = Math.max(0, Math.min(255, 74 + grain));
        }
        // Desk / hands foreground: y >= 330 or x >= 150
        else {
          const grain = ((x * 7 + y * 13) % 5) - 2;
          if (x > 170 && y > 340) {
            // Desk wood surface
            raw[idx] = Math.max(0, Math.min(255, 52 + grain));
            raw[idx + 1] = Math.max(0, Math.min(255, 42 + grain));
            raw[idx + 2] = Math.max(0, Math.min(255, 36 + grain));
          } else {
            // Dark suit fabric shadow
            raw[idx] = Math.max(0, Math.min(255, 16 + grain));
            raw[idx + 1] = Math.max(0, Math.min(255, 24 + grain));
            raw[idx + 2] = Math.max(0, Math.min(255, 58 + grain));
          }
        }
      }
    }
  }

  // 3x High-Definition Upscale (1200x1200)
  const upscaled = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(1200, 1200, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.6,
      m2: 0.6,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.05
    })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'sandroalves.jpg'), upscaled);
  fs.writeFileSync(path.join(publicDir, 'sanalves.jpg'), upscaled);
  fs.writeFileSync(path.join(publicDir, 'profile.jpg'), upscaled);

  // Generate 4:5 executive portrait (1080x1350)
  await sharp(upscaled)
    .extract({ left: 160, top: 0, width: 880, height: 1100 })
    .resize(1080, 1350, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(publicDir, 'san-alves-portrait.jpg'));

  console.log('Cleaned and upscaled successfully!');
}

cleanCompletely().catch(console.error);
