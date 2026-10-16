const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url == ['', '/']) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page!');
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page!');
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Page!');
    }
    else if (req.url == '/search') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Search Page!');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});