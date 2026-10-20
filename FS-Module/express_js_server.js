const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    if (req.url == '/favicon.ico') {
        return res.status(204).end();
    };

    fs.appendFile('logs.txt', `New Request Received : ${new Date().toLocaleString()} - ${req.method} - ${req.url}\n`, () => {
        res.status(200).set({ 'Content-Type': 'text/plain' });
        res.send('Hello From Express JS Server!');
    });
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});