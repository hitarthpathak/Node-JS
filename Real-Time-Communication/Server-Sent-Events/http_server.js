const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/?data=true') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        console.log('Client Connected!');

        const sse_interval = setInterval(() => {
            res.write(`data: Date : ${new Date().toLocaleDateString()} || Time : ${new Date().toLocaleTimeString()}\n\n`);
        }, 1000);

        req.on('close', () => {
            console.log('Client Disconnected!');
            clearInterval(sse_interval);
            res.end();
        });
    }
    else if (req.url == '' || req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`Hello From HTTP Server!`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});