var http = require('http');  //require means get a module
var output = require('./output');  //-->we exported an object

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(' ' + output.account());
  res.write(' ' + output.converter());
  res.end();
}).listen(3000);
