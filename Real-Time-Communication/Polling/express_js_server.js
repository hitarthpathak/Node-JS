const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
    if (req.query.data == 'true') {
        res.status(200).set({ 'Content-Type': 'text/plain' });
        return res.send(`${new Date().toLocaleString()}`);
    };
    next();
});

app.get(['/', ''], (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Hello From HTTP Server!');
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' });
    res.send('Page Not Found!');
});

app.listen(PORT, () => {
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