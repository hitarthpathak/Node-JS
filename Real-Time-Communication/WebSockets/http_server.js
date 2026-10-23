const http = require('http');
const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello From HTTP Server!');
});

const websocket_server = new WebSocket.Server({ server });

websocket_server.on('connection', (socket) => {
    console.log('WebSocket Connection Opened On Server!');

    socket.on('message', (message) => {
        console.log('[Message From Browser] : ', message.toString());
        socket.send(`[Server Recieved Your Message] : ${message.toString()}`);
    });

    socket.on('close', () => {
        console.log('Client Disconnected!');
    });
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});