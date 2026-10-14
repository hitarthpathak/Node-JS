const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Home Page!');
});

app.get('/about', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('About Page!');
});

app.get('/contact', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Contact Page!');
});

app.get('/search', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Search Page!');
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' });
    res.send('Page Not Found!');
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});