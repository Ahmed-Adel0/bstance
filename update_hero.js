const fs = require('fs');
const file = 'c:/Users/Ahmed_Adel/Downloads/bstance-website/src/components/sections/HeroSection.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/src="data:image\/png;base64,[^"]+"/g, 'src="/imgs/Logo.png"');
content = content.replace(/src="data:image\/jpeg;base64,[^"]+"/g, 'src="/imgs/Logo.png"');
content = content.replace(/src='data:image\/png;base64,[^']+'/g, "src='/imgs/Logo.png'");
fs.writeFileSync(file, content);
console.log("Done");
