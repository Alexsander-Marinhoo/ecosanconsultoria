const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function restoreAndUpscale() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const publicDir = path.join(__dirname, '..', 'public');

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const raw = Buffer.from(data);

  const cx = 200;
  const cy = 200;

  // 1. Precise Pixel Restoration
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

      // Only check pixels in the outer badge zone
      if (distFromCenter > 152) {
        const r = raw[idx];
        const g = raw[idx + 1];
        const b = raw[idx + 2];

        // Green pixel or white letter in the badge
        const isGreen = (g > 45 && g > r * 1.12 && g > b * 1.08) || (g > 65 && g > r && g > b);
        const isWhiteTextInBadge = (r > 160 && g > 160 && b > 160) && (x < 300 && y > 150);

        if (isGreen || isWhiteTextInBadge) {
          // Region A: Upper Left Background (y < 210, x < 120)
          // Matches the dark office wall / bookshelf (#1b1e24 -> #232730)
          if (y < 210 && x < 120) {
            // Sample subtle vertical gradient + gentle noise to match camera grain
            const grain = ((x * 13 + y * 7) % 5) - 2;
            raw[idx] = Math.max(0, Math.min(255, 30 + grain));
            raw[idx + 1] = Math.max(0, Math.min(255, 32 + grain));
            raw[idx + 2] = Math.max(0, Math.min(255, 36 + grain));
          }
          // Region B: Left Suit Jacket / Sleeve (y >= 210 && y < 340 && x < 160)
          // Matches the rich navy blue blazer (#182648)
          else if (y >= 210 && y < 340 && x < 160) {
            const grain = ((x * 17 + y * 11) % 5) - 2;
            raw[idx] = Math.max(0, Math.min(255, 20 + grain));
            raw[idx + 1] = Math.max(0, Math.min(255, 32 + grain));
            raw[idx + 2] = Math.max(0, Math.min(255, 76 + grain));
          }
          // Region C: Desk / Lower Edge (y >= 340 or x >= 160)
          // Matches the dark office desk with warm tone
          else {
            const grain = ((x * 7 + y * 13) % 5) - 2;
            if (x > 180) {
              // Desk wood shadow
              raw[idx] = Math.max(0, Math.min(255, 45 + grain));
              raw[idx + 1] = Math.max(0, Math.min(255, 38 + grain));
              raw[idx + 2] = Math.max(0, Math.min(255, 34 + grain));
            } else {
              // Dark suit / shadow transition
              raw[idx] = Math.max(0, Math.min(255, 22 + grain));
              raw[idx + 1] = Math.max(0, Math.min(255, 30 + grain));
              raw[idx + 2] = Math.max(0, Math.min(255, 55 + grain));
            }
          }
        }
      }
    }
  }

  // 2. High Quality Bilateral & Lanczos3 Upscaling to 1200x1200
  // Upscaling pipeline: Clean raw -> Lanczos3 (3x scale) -> Smart Unsharp Mask -> Contrast curve
  const upscaledBuffer = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(1200, 1200, {
      kernel: sharp.kernel.lanczos3,
      fastShrinkOnLoad: false
    })
    .sharpen({
      sigma: 1.1,
      m1: 1.5,
      m2: 0.5,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.04
    })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  // Save full clean 1200x1200 image as sandroalves.jpg and sanalves.jpg
  fs.writeFileSync(path.join(publicDir, 'sandroalves.jpg'), upscaledBuffer);
  fs.writeFileSync(path.join(publicDir, 'sanalves.jpg'), upscaledBuffer);
  fs.writeFileSync(path.join(publicDir, 'profile.jpg'), upscaledBuffer);

  // 3. Also generate high-definition 4:5 executive portrait (1080x1350)
  // Perfectly framing San Alves: center x=600, y=540
  await sharp(upscaledBuffer)
    .extract({ left: 160, top: 0, width: 880, height: 1100 })
    .resize(1080, 1350, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(publicDir, 'san-alves-portrait.jpg'));

  console.log('Restoration and upscale finished successfully!');
}

restoreAndUpscale().catch(console.error);
