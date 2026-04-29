import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public');

// Give the SVG explicit dimensions so sharp renders it at the right size
const svgSource = Buffer.from(
  readFileSync(resolve(publicDir, 'favicon.svg'), 'utf8')
    .replace(/(<svg\b[^>]*?)\s+width="[^"]*"/i, '$1')
    .replace(/(<svg\b[^>]*?)\s+height="[^"]*"/i, '$1')
    .replace('<svg ', '<svg width="512" height="512" ')
);

await sharp(svgSource).resize(32,  32).png().toFile(resolve(publicDir, 'favicon-32.png'));
await sharp(svgSource).resize(180, 180).png().toFile(resolve(publicDir, 'apple-touch-icon.png'));

console.log('favicons generated: favicon-32.png, apple-touch-icon.png');
