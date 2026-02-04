/**
 * Build Script: Combines SVG components into a single profile-banner.svg
 * 
 * Usage: node build-banner.js
 */

const fs = require('fs');
const path = require('path');

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

console.log('🔨 Building profile banner...\n');

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

// Wrap in SVG root element with responsive sizing
const finalSvg = `<svg viewBox="0 0 1200 1270" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="max-width: 1200px; display: block; margin: 0 auto; background: #000000;">
${svgContent}
</svg>`;

// Write to output file
fs.writeFileSync(outputFile, finalSvg, 'utf8');

console.log(`\n✨ Success! Profile banner created at: profile-banner.svg`);
console.log(`📊 File size: ${(finalSvg.length / 1024).toFixed(2)} KB\n`);
