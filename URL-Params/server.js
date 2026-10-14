const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);
    switch (parsed_url.pathname) {
        case '/':
            res.end('Home Page!');
            break;
        case '/about':
            res.end(`
                    Hello, User! \n
                    Your ID From URL : ${parsed_url.query.id} \n
                    Your Name From URL : ${parsed_url.query.name} \n
                    `);
            break;
        case '/contact':
            res.end(`
                    Hello, User! \n
                    Your E-Mail From URL : ${parsed_url.query.email} \n
                    Your Number From URL : ${parsed_url.query.number} \n
                    `);
            break;
        case '/search':
            res.end(`
                    Hello, User! \n
                    Your Query : ${parsed_url.query.query} \n
                    `);
            break;
        default:
            res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});