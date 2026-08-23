const sharp = require('sharp');
const path = require('path');

async function analyze() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

  console.log('Image dimensions:', info.width, info.height);
  let minX = 400, maxX = 0, minY = 400, maxY = 0;
  let count = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Green badge condition: hue is in green range (G > R * 1.15 && G > B * 1.15 && G > 50)
      if (g > 50 && g > r * 1.15 && g > b * 1.15) {
        count++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Found ${count} green pixels. Bounding box: X[${minX}, ${maxX}], Y[${minY}, ${maxY}]`);
}

analyze().catch(console.error);
