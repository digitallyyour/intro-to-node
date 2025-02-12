const http = require('http');
var url = require('url')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    var q = url.parse(req.url, true).query;
    var dates = q.year;
    var month = q.month;
    res.write(dates + " " + month);
    res.end('\n\nHello, World!\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});