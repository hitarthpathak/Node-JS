const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end('Hello From Server!');
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});