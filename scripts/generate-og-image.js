const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Create SVG with "Are you ready?" text
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#9333EA;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#7C3AED;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>

      <!-- Main text: "Are you ready?" -->
      <text x="600" y="280"
            font-family="Arial, Helvetica, sans-serif"
            font-size="96"
            font-weight="bold"
            fill="white"
            text-anchor="middle">Are you ready?</text>

      <!-- Subtitle: "Kaleidoscope Recovery" -->
      <text x="600" y="360"
            font-family="Arial, Helvetica, sans-serif"
            font-size="40"
            fill="white"
            opacity="0.95"
            text-anchor="middle">Kaleidoscope Recovery</text>

      <!-- Description -->
      <text x="600" y="420"
            font-family="Arial, Helvetica, sans-serif"
            font-size="28"
            fill="white"
            opacity="0.85"
            text-anchor="middle">A Radical Recovery Solution</text>
    </svg>
  `;

  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log('✅ OG image created successfully at:', outputPath);
  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
