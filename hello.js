// console.log("Hello");
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
	res.write(req.url)
	res.end('<h3>Hello Yugansh Jain !! U are in 3rd standard</h3>')
	
}).listen(8080);