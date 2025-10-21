const fs = require('fs');
const path = require('path');

// Create .nojekyll file in out directory (one level up from scripts folder)
const nojekyllPath = path.join(__dirname, '..', 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('.nojekyll file created successfully');

// Create a CNAME file if you have a custom domain (optional)
// const cnamePath = path.join(__dirname, '..', 'out', 'CNAME');
// fs.writeFileSync(cnamePath, 'yourdomain.com');
