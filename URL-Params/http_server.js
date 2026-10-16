const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);
    if (parsed_url.pathname == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page!');
    }
    else if (parsed_url.pathname == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`
                    Hello, User! \n
                    Your ID From URL : ${parsed_url.query.id} \n
                    Your Name From URL : ${parsed_url.query.name} \n
                `);
    }
    else if (parsed_url.pathname == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`
                    Hello, User! \n
                    Your E-Mail From URL : ${parsed_url.query.email} \n
                    Your Number From URL : ${parsed_url.query.number} \n
                `);
    }
    else if (parsed_url.pathname == '/search') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`
                    Hello, User! \n
                    Your Query : ${parsed_url.query.query} \n
                `);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    }
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});