const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end('Home Page!');
            break;
        case '/about':
            res.end('About Page!');
            break;
        case '/contact':
            res.end('Contact Page!');
            break;
        case '/search':
            res.end('Search Page!');
            break;
        default:
            res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});