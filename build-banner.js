/**
 * Build Script: Windows Desktop Profile Banner
 * 
 * Usage: node build-banner.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔨 Building Windows Desktop profile banner...\n');

// Component files in order
const components = [
    'defs.svg',
    'background.svg',
    'header.svg',
    'about.svg',
    'tech-stack.svg',
    'connect.svg'
];

const componentsDir = path.join(__dirname, 'components');
const outputFile = path.join(__dirname, 'profile-banner.svg');

// Read all component files
let svgContent = '';
components.forEach(component => {
    const filePath = path.join(componentsDir, component);

    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: ${component} not found!`);
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    svgContent += content + '\n';
    console.log(`✅ Loaded: ${component}`);
});

// Wrap in SVG root element with responsive sizing (GitHub-compatible)
const finalSvg = `<svg viewBox="0 0 1200 1400" xmlns="http://www.w3.org/2000/svg">
${svgContent}
</svg>`;

// Write to output file
fs.writeFileSync(outputFile, finalSvg, 'utf8');

console.log('\n✨ Success! Windows Desktop profile banner created!');
console.log(`📊 File size: ${(finalSvg.length / 1024).toFixed(2)} KB\n`);
