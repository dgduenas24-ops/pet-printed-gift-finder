const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {'/':'index.html','/index.html':'index.html','/app.js':'app.js','/catalog.js':'catalog.js','/recommend.js':'recommend.js','/styles.css':'styles.css'};
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css'};
http.createServer((req,res)=>{
 const file = files[new URL(req.url,'http://localhost').pathname];
 if(!file){res.writeHead(404);return res.end('Not found');}
 fs.readFile(path.join(__dirname,file),(error,data)=>{
  if(error){res.writeHead(500);return res.end('Unable to load file');}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]+'; charset=utf-8'});res.end(data);
 });
}).listen(5173,'127.0.0.1',()=>console.log('Open http://localhost:5173'));
