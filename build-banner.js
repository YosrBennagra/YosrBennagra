/**
 * Build Script: RANDOM DESIGN GENERATOR
 * Completely different layouts each time!
 * 
 * Usage: node build-banner.js
 */

const fs = require('fs');
const path = require('path');

// Available design systems
const designs = [
    {
        name: 'Cyberpunk Terminal',
        folder: 'cyberpunk-terminal',
        viewBox: '0 0 1200 1270',
        description: 'Futuristic HUD interface with terminal windows'
    },
    {
        name: 'Minimalist Cards',
        folder: 'minimalist-cards',
        viewBox: '0 0 1200 1100',
        description: 'Clean card-based layout with subtle effects'
    },
    {
        name: 'Neon Billboard',
        folder: 'neon-billboard',
        viewBox: '0 0 1200 1200',
        description: 'Bold neon signs with intense glows'
    }
];

// Randomly select a design
const selectedDesign = designs[Math.floor(Math.random() * designs.length)];

console.log('🎨 ========================================');
console.log('   RANDOM DESIGN GENERATOR');
console.log('========================================');
console.log(`🎲 Selected: ${selectedDesign.name}`);
console.log(`📝 Style: ${selectedDesign.description}`);
console.log('========================================\n');
console.log('🔨 Building banner...\n');

// Component files in order
const components = [
    'defs.svg',
    'background.svg',
    'header.svg',
    'about.svg',
    'tech-stack.svg',
    'connect.svg'
];

const componentsDir = path.join(__dirname, 'designs', selectedDesign.folder);
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

// Wrap in SVG root element with responsive sizing
const finalSvg = `<svg viewBox="${selectedDesign.viewBox}" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="max-width: 1200px; display: block; margin: 0 auto; background: #000000;">
${svgContent}
</svg>`;

// Write to output file
fs.writeFileSync(outputFile, finalSvg, 'utf8');

console.log('\n========================================');
console.log(`✨ SUCCESS!`);
console.log(`📐 Design: ${selectedDesign.name}`);
console.log(`📊 File size: ${(finalSvg.length / 1024).toFixed(2)} KB`);
console.log('========================================');
console.log('\n💡 Run again for a completely different design!\n');
