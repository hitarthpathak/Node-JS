const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get(['', '/'], (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Home Page!');
});

app.get('/about', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send(`
        Hello, User! \n
        Your ID From URL : ${req.query.id} \n
        Your Name From URL : ${req.query.name} \n
    `);
});

app.get('/contact', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send(`
        Hello, User! \n
        Your E-Mail From URL : ${req.query.email} \n
        Your Number From URL : ${req.query.number} \n
    `);
});

app.get('/search', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send(`
        Hello, User! \n
        Your Query : ${req.query.query} \n
    `);
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' });
    res.send('Page Not Found!');
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});