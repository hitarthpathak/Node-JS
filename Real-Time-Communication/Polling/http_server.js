const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/?data=true') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`Time : ${new Date().toLocaleString()}`);
    }
    else if (req.url == '' || req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello From HTTP Server!`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});