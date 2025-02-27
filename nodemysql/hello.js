var mysql = require('mysql2');

console.log("Hello World");

var con = mysql.createConnection({
    host: "localhost",
    user: "sushant",
    password: "ddd",
});

con.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        throw err;
    }
    
    console.log('Connected to database ' + con.threadId);
});