const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});

app.get('/', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' });
    res.send('Hello From Express Server!');
});