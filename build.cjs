// Copy only browser-facing files into the deployment folder.
const fs=require('node:fs');
const path=require('node:path');
const destination=path.join(__dirname,'dist');
fs.mkdirSync(destination,{recursive:true});
for(const file of ['index.html','styles.css','catalog.js','recommend.js','app.js']){
 fs.copyFileSync(path.join(__dirname,file),path.join(destination,file));
}
console.log('Website prepared in dist.');
