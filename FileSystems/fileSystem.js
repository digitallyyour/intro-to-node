// console.log("Hello");
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true)
    console.log(q)
    console.log('Here is the path name of URL : '+q.pathname)
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        console.log('... Incoming request '+req.url)
        res.end();
    });
    // res.writeHead(200, {'Content-Type':'text/html'})
    // res.write(req.url)	
    // res.end('Hello Yugansh !!')
    
}).listen(8080);