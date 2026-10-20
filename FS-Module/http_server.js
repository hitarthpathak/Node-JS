const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'text/plain' });
        return res.end();
    };
    
    fs.appendFile('logs.txt', `New Request Received : ${new Date().toLocaleString()} - ${req.method} - ${req.url}\n`, () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello From HTTP Server!');
    });
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});