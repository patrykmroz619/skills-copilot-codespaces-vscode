// Create web server
const http = require('http');
const fs = require('fs');

// Create server
http.createServer((req, res) => {
    // Read file
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            console.log('Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
}).listen(8080);