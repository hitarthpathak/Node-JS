const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const login_middleware = (req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} Request Made To : ${req.url}`);
    next();
};

const auth_middleware = (req, res, next) => {
    const is_admin = req.query.role == 'admin';
    if (!is_admin) {
        res.status(403).set({ 'Content-Type': 'text/plain' })
        return res.send('Access Denied : Admins Only!');
    };
    next();
};

app.use(login_middleware);

app.get(['', '/'], (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' })
    res.send('Home Page!');
});

app.get('/about', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' })
    res.send('About Page!');
});

app.get('/dashboard', auth_middleware, (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/plain' })
    res.send('Welcome To The Admin Dashboard!');
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' })
    res.send('Page Not Found!');
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});