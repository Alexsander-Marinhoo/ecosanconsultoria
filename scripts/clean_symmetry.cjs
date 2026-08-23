const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function cleanWithSymmetry() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'sandroalves.jpg');

  // 1. Reset to pristine original
  execSync('git checkout HEAD -- public/sandroalves.jpg', { cwd: path.join(__dirname, '..') });

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const raw = Buffer.from(data);

  // Helper to get pixel RGB
  function getPixel(x, y) {
    const clampedX = Math.max(0, Math.min(info.width - 1, Math.round(x)));
    const clampedY = Math.max(0, Math.min(info.height - 1, Math.round(y)));
    const idx = (clampedY * info.width + clampedX) * 3;
    return [raw[idx], raw[idx + 1], raw[idx + 2]];
  }

  // Helper to set pixel RGB
  function setPixel(x, y, r, g, b) {
    const idx = (y * info.width + x) * 3;
    raw[idx] = r;
    raw[idx + 1] = g;
    raw[idx + 2] = b;
  }

  // 2. Identify and restore every badge pixel
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = raw[idx];
      const g = raw[idx + 1];
      const b = raw[idx + 2];

      // Green badge detection:
      // STRICTLY only in left/bottom region (x < 140 or y > 320)
      const inPossibleBadgeZone = (x < 120 && y > 50) || (x < 360 && y > 310);
      
      const isGreen = (g > 40 && g > r * 1.08 && g > b * 1.05) || (g > 55 && g > r && g > b);
      const isWhiteTextInBadge = (r > 140 && g > 140 && b > 140 && inPossibleBadgeZone && (x < 110 || y > 300));
      const isBadgeShadow = (inPossibleBadgeZone && x < 50 && y > 150 && g > 30 && g > r);

      if (inPossibleBadgeZone && (isGreen || isWhiteTextInBadge || isBadgeShadow)) {
        if (y < 210 && x < 70) {
          // Dark background wall: sample slightly to the right (x = 75, y)
          const [sr, sg, sb] = getPixel(75, y);
          setPixel(x, y, sr, sg, sb);
        } else if (y >= 210 && y < 330 && x < 150) {
          // Left suit blazer: clone texture from right blazer sleeve
          // Symmetrical X around center x=200
          const symX = Math.min(380, 200 + (200 - x) * 0.9);
          const [sr, sg, sb] = getPixel(symX, y);
          // Darken slightly to match natural left-side shadow
          setPixel(x, y, Math.round(sr * 0.95), Math.round(sg * 0.95), Math.round(sb * 0.95));
        } else {
          // Bottom edge / desk: blend from above (x, y - 35)
          const [sr, sg, sb] = getPixel(x, Math.max(180, y - 35));
          setPixel(x, y, sr, sg, sb);
        }
      }
    }
  }

  // 3. Upscale full image to 1200x1200 with Lanczos3 + Super Sampling
  const fullUpscaled = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(1200, 1200, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 1.15,
      m1: 1.6,
      m2: 0.5,
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

  fs.writeFileSync(path.join(publicDir, 'sandroalves.jpg'), fullUpscaled);
  fs.writeFileSync(path.join(publicDir, 'sanalves.jpg'), fullUpscaled);
  fs.writeFileSync(path.join(publicDir, 'profile.jpg'), fullUpscaled);

  // 4. Create 4:5 executive portrait (1080x1350)
  // Left: 150, Top: 0, Width: 900, Height: 1125
  await sharp(fullUpscaled)
    .extract({ left: 150, top: 0, width: 900, height: 1125 })
    .resize(1080, 1350, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(publicDir, 'san-alves-portrait.jpg'));

  console.log('Cleaned with symmetry and upscaled!');
}

cleanWithSymmetry().catch(console.error);
