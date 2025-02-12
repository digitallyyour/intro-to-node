// console.log("Hello");
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
	res.write(req.url)	
	res.end('Hello Yugansh !!')
	
}).listen(8080);