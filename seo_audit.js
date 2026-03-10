const fs = require('fs');
const path = require('path');

const srcDir = path.join('d:', 'Programs', 'User', 'Downloads', 'Grindfix', 'src', 'app');
const publicDir = path.join('d:', 'Programs', 'User', 'Downloads', 'Grindfix', 'public');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

const audit = {
    images: [],
    meta: [],
    headers: [],
    internalLinks: []
};

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const relPath = path.relative(srcDir, filePath);

        // 1. Check Images (naive regex for <img ... />)
        const imgRegex = /<img\s+([^>]+)>/g;
        let match;
        while ((match = imgRegex.exec(content)) !== null) {
            const attrs = match[1];
            const hasAlt = /alt=['"{]/.test(attrs);
            const hasWidth = /width=\{?['"]?[0-9]/.test(attrs);
            const hasHeight = /height=\{?['"]?[0-9]/.test(attrs);
            let src = "";
            const srcMatch = /src=['"]([^'"]+)['"]/.exec(attrs);
            if (srcMatch) src = srcMatch[1];

            audit.images.push({
                file: relPath,
                src: src,
                hasAlt,
                hasWidth,
                hasHeight
            });
        }

        // 2. Check Meta
        const metaRegex = /generateMeta\(\{\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["']/g;
        let metaMatch = metaRegex.exec(content);
        if (metaMatch) {
            audit.meta.push({
                file: relPath,
                titleLen: metaMatch[1].length,
                descLen: metaMatch[2].length
            });
        }

        // 3. Headers
        const h1Matches = content.match(/<h1[^>]*>/g) || [];
        audit.headers.push({
            file: relPath,
            h1Count: h1Matches.length
        });
    }
});

// Check actual image files in public
const imgFiles = [];
walkDir(publicDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
        const stats = fs.statSync(filePath);
        const name = path.basename(filePath);
        imgFiles.push({
            name,
            weightKB: Math.round(stats.size / 1024),
            isWebP: ext === '.webp',
            hasSpaces: name.includes(' '),
            hasUnderscores: name.includes('_')
        });
    }
});

console.log(JSON.stringify({ audit, imgFiles }, null, 2));
