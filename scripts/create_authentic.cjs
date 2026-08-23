const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function createAuthenticExecutiveHeadshot() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'sandroalves.jpg');

  // Reset to original
  execSync('git checkout HEAD -- public/sandroalves.jpg', { cwd: path.join(__dirname, '..') });

  const fileBuffer = fs.readFileSync(inputPath);

  // Extract crop: left: 82, top: 15, width: 236, height: 295
  const { data, info } = await sharp(fileBuffer)
    .extract({ left: 82, top: 15, width: 236, height: 295 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const raw = Buffer.from(data);

  // Touch up only the bottom-left corner where green tint was
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = raw[idx];
      const g = raw[idx + 1];
      const b = raw[idx + 2];

      // Detect any green tint in the lower left corner (x < 50, y > 200)
      if (x < 50 && y > 200 && (g > 40 && g > r * 1.05)) {
        // Replace with rich dark navy suit / shadow tone matching adjacent fabric
        const grain = ((x * 13 + y * 7) % 5) - 2;
        raw[idx] = Math.max(0, Math.min(255, 20 + grain));
        raw[idx + 1] = Math.max(0, Math.min(255, 30 + grain));
        raw[idx + 2] = Math.max(0, Math.min(255, 68 + grain));
      }
    }
  }

  // Upscale 4x with Lanczos3 + Sharpening to 944x1180 (Crisp 4:5 Portrait)
  const pristineCrop = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 3 } })
    .resize(944, 1180, {
      kernel: sharp.kernel.lanczos3,
      fastShrinkOnLoad: false
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
      brightness: 1.01,
      saturation: 1.06
    })
    .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
    .toBuffer();

  // Save to all profile image paths
  fs.writeFileSync(path.join(publicDir, 'sandroalves.jpg'), pristineCrop);
  fs.writeFileSync(path.join(publicDir, 'sanalves.jpg'), pristineCrop);
  fs.writeFileSync(path.join(publicDir, 'san-alves-portrait.jpg'), pristineCrop);
  fs.writeFileSync(path.join(publicDir, 'profile.jpg'), pristineCrop);

  console.log('Spotless Authentic Executive Headshot created!');
}

createAuthenticExecutiveHeadshot().catch(console.error);
