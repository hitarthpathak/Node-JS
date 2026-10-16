const http = require('http');
const PORT = process.env.PORT || 3000;

const login_middleware = (req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} Request Made To : ${req.url}`);
    next();
};

const auth_middleware = (req, res, next) => {
    if (req.url.startsWith('/dashboard')) {
        const url_params = new URL(req.url, `http://${req.headers.host}`);
        const is_admin = url_params.searchParams.get('role') == 'admin';

        if (!is_admin) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            return res.end('Access Denied : Admins Only!');
        };
    };
    next();
};

const server = http.createServer((req, res) => {
    login_middleware(req, res, () => {
        auth_middleware(req, res, () => {
            if (req.url == '/' || req.url == '') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Home Page!');
            }
            else if (req.url == '/about') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About Page!');
            }
            else if (req.url.startsWith('/dashboard')) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome To The Admin Dashboard!');
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Page Not Found!');
            };
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});