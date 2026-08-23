const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'sandroalves.jpg');
  const metadata = await sharp(inputPath).metadata();
  console.log('Original image:', metadata);

  // Read raw pixel data
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('Raw info:', info);
}

processImage().catch(console.error);
