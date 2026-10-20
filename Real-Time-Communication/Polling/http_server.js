const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/?data=true') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`Time : ${new Date().toLocaleString()}`);
    }
    else if (req.url == '' || req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello From HTTP Server!`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    };
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});



// setInterval(async () => {
//     try {
//         const res = await fetch(`http://localhost:3000/?data=true`);
//         const data = await res.text();

//         document.body.style.fontFamily = 'monospace';
//         document.body.style.whiteSpace = 'pre';
//         document.body.innerText += '\n--- Connection Started! ---\n' +
//                                    'CLIENT : Hey Server! What Date & Time Is It ?\n' +
//                                    'SERVER : ' + data + '\n' +
//                                    '--- Connection Closed! ---\n';
//     } catch (err) {
//         console.error("Fetch failed:", err.message);
//     };
// }, 3000);