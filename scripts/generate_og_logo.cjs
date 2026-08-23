const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgPath = path.join(publicDir, 'logo.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Transparent high-res logo PNG
  await sharp(svgBuffer)
    .resize(1000, 965, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Created public/logo.png');

  // 2. Open Graph 1200x630 with brand dark background #0a182e and subtle glow
  const width = 1200;
  const height = 630;

  // Resize logo for OG 1200x630 (centered, around 450px height)
  const logoResized = await sharp(svgBuffer)
    .resize(520, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const backgroundSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#14284b" />
          <stop offset="60%" stop-color="#0a182e" />
          <stop offset="100%" stop-color="#060f1e" />
        </radialGradient>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stop-color="#E1B144" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#E1B144" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
      <circle cx="${width / 2}" cy="${height / 2}" r="380" fill="url(#goldGlow)" />
    </svg>
  `);

  const ogComposite = await sharp(backgroundSvg)
    .composite([{ input: logoResized, gravity: 'center' }])
    .png({ quality: 95 })
    .toBuffer();

  // Save OG image formats
  fs.writeFileSync(path.join(publicDir, 'og-logo.png'), ogComposite);
  fs.writeFileSync(path.join(publicDir, 'og-cover.png'), ogComposite);
  
  // Also save og-cover.webp and og-cover.jpg so existing URLs/caches load the logo
  await sharp(ogComposite)
    .jpeg({ quality: 92 })
    .toFile(path.join(publicDir, 'og-cover.jpg'));

  await sharp(ogComposite)
    .webp({ quality: 92 })
    .toFile(path.join(publicDir, 'og-cover.webp'));

  // 3. Create square 600x600 version for WhatsApp square preview if needed
  const sqSize = 600;
  const sqLogo = await sharp(svgBuffer)
    .resize(440, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const sqBgSvg = Buffer.from(`
    <svg width="${sqSize}" height="${sqSize}" viewBox="0 0 ${sqSize} ${sqSize}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sqBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#14284b" />
          <stop offset="70%" stop-color="#0a182e" />
          <stop offset="100%" stop-color="#060f1e" />
        </radialGradient>
        <radialGradient id="sqGlow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#E1B144" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#E1B144" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${sqSize}" height="${sqSize}" fill="url(#sqBg)" />
      <circle cx="${sqSize / 2}" cy="${sqSize / 2}" r="260" fill="url(#sqGlow)" />
    </svg>
  `);

  await sharp(sqBgSvg)
    .composite([{ input: sqLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'logo-square.png'));

  console.log('All Open Graph logo assets generated successfully!');
}

run().catch(console.error);
