var http = require('http');  //this allows us to use this in HTTP in browser
var output = require('./output');  //this links to output.js file

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(output.account() + output.converter());
  res.end();
}).listen(3000);
