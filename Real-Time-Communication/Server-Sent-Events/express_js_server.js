const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
    if (req.query.data == 'true') {
        res.status(200).set({
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
        });
        return;
    };
    next();
});

app.get(['/', ''], (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Hello From Express JS Server!');
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' });
    res.send('Page Not Found!');
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});