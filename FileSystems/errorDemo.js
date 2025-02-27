// console.log("Hello");
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true)
    var fileName = "."+q.pathname;
    if (fileName == './'){
        fileName = './index2.html'
    }
    fs.readFile(fileName, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        console.log('... Incoming request '+req.url)
        return  res.end();
    });
    // res.writeHead(200, {'Content-Type':'text/html'})
    // res.write(req.url)	
    // res.end('Hello Yugansh !!')
    
}).listen(8080);