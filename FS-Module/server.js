// ||--------------------------------------||
// || File-System Module Using HTTP Server ||
// ||--------------------------------------||

// const http = require('http');
// const fs = require('fs');
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') return res.end();
//     fs.appendFile('logs.txt', `New Request Received : ${new Date().toLocaleString()} - ${req.method} - ${req.url}\n`, () => {
//         res.end('Hello From HTTP Server!');
//     });
// });

// server.listen(PORT, () => {
//     console.log(`Server Is Running On Port ${PORT}!`);
// });



// ||--------------------------------------------||
// || File-System Module Using Express JS Server ||
// ||--------------------------------------------||

const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    if (req.url === '/favicon.ico') return res.end();
    
    fs.appendFile('logs.txt', `New Request Received : ${new Date().toLocaleString()} - ${req.method} - ${req.url}\n`, () => {
        res.send('Hello From Express Server!');
    });
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});