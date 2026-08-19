import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const outputDir = path.resolve('public');

// Vector Favicon SVG - Optimized for extreme legibility at small sizes (16x16, 32x32, 48x48)
// Colors:
// - Background: #24295E (Institutional dark blue)
// - Letters: #FFFFFF (Pure white)
// - Horizontal bar: #FFD400 (Vibrant amber-yellow)
// Proportions: Balanced optical center, bold strokes, rounded squircle corners
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Fundo Azul Institucional (#24295E) com cantos arredondados suaves -->
  <rect width="512" height="512" rx="96" ry="96" fill="#24295E"/>
  
  <g id="sca-logo-mark">
    <!-- Grupo SCA Centralizado com linhas nítidas e peso óptico de alto contraste -->
    <!-- Letra S -->
    <path d="M 172 135 L 94 135 C 75 135 62 148 62 168 L 62 188 C 62 208 75 220 96 225 L 140 234 C 158 238 165 244 165 254 L 165 264 C 165 274 156 282 142 282 L 64 282 L 64 326 L 148 326 C 172 326 198 312 198 286 L 198 258 C 198 234 182 220 156 214 L 115 206 C 100 203 94 198 94 190 L 94 180 C 94 172 101 166 112 166 L 172 166 Z" fill="#FFFFFF" transform="skewX(-10) translate(40, -10)"/>

    <!-- Letra C -->
    <path d="M 292 135 L 210 135 C 182 135 166 154 166 182 L 166 278 C 166 308 184 326 212 326 L 294 326 L 294 282 L 216 282 C 204 282 198 274 198 262 L 198 198 C 198 186 204 178 216 178 L 292 178 Z" fill="#FFFFFF" transform="skewX(-10) translate(40, -10)"/>

    <!-- Letra A -->
    <path d="M 358 135 L 306 135 L 260 326 L 296 326 L 309 270 L 362 270 L 374 326 L 410 326 Z M 318 235 L 334 168 L 352 235 Z" fill="#FFFFFF" transform="skewX(-10) translate(40, -10)"/>
  </g>

  <!-- Barra horizontal amarela (#FFD400) discreta e perfeitamente alinhada abaixo das letras -->
  <rect x="76" y="362" width="360" height="22" rx="11" fill="#FFD400"/>
</svg>`;

async function run() {
  // Salvar favicon.svg
  fs.writeFileSync(path.join(outputDir, 'favicon.svg'), svgFavicon, 'utf8');
  console.log('✅ favicon.svg gerado com sucesso.');

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ];

  for (const item of sizes) {
    const buffer = await sharp(Buffer.from(svgFavicon))
      .resize(item.size, item.size, { fit: 'contain' })
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(path.join(outputDir, item.name), buffer);
    console.log('✅ ' + item.name + ' (' + item.size + 'x' + item.size + ') gerado.');
  }

  // Gerar favicon.ico contendo 16x16, 32x32 e 48x48
  const icoBuffer = await pngToIco([
    path.join(outputDir, 'favicon-16x16.png'),
    path.join(outputDir, 'favicon-32x32.png'),
    path.join(outputDir, 'favicon-48x48.png')
  ]);

  fs.writeFileSync(path.join(outputDir, 'favicon.ico'), icoBuffer);
  console.log('✅ favicon.ico gerado com múltiplos tamanhos.');
}

run().catch(console.error);
