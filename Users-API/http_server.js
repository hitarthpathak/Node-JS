const http = require('http');
const url = require('url');
const Users = require('./users.json');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);
    const matched_json_path = parsed_url.pathname.match(/^\/api\/users\/(\d+)\/?$/);
    const matched_table_path = parsed_url.pathname.match(/^\/users\/(\d+)\/?$/);

    // GET API

    if (req.method == 'GET' && (parsed_url.pathname == '/api/users' || parsed_url.pathname == '/api/users/')) {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        return res.end(JSON.stringify(Users));
    };

    if (req.method == 'GET' && matched_json_path) {
        const user_id = Number(matched_json_path[1]);
        const user = Users.find((u) => u.id == user_id);

        if (user) {
            res.writeHead(200, { 'Content-Type': 'text/json' });
            return res.end(JSON.stringify(user));
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('User Not Found!');
        };
    };

    if (req.method == 'GET' && (parsed_url.pathname == '/' || parsed_url.pathname == '/users' || parsed_url.pathname == '/users/')) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(
            `
                <table style="height: auto; width: 100%;">
                    <thead>
                        <tr style="font-weight: bold;">
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User ID</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Name</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User E-Mail</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Phone</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Gender</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User City</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User State</td>
                            <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${Users.map((user) => (
                            `
                                <tr>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px"><b>${user.id}.</b></td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.full_name}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.email}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.phone}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.gender}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.city}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.state}</td>
                                    <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.country}</td>
                                </tr>
                            `
                        )).join('')}
                    </tbody>
                </table>
                \n
            `
        );
    };

    if (req.method == 'GET' && matched_table_path) {
        const user_id = Number(matched_table_path[1]);
        const user = Users.find((u) => u.id == user_id);

        if (user) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(
                `
                    <table style="height: auto; width: 100%;">
                        <thead>
                            <tr style="font-weight: bold;">
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User ID</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Name</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User E-Mail</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Phone</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Gender</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User City</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User State</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Country</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px"><b>${user.id}.</b></td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.full_name}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.email}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.phone}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.gender}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.city}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.state}</td>
                                <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.country}</td>
                            </tr>
                        </tbody>
                    </table>
                    \n
                `
            );
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('User Not Found!');
        };
    };

    // POST API

    if (req.method == 'POST' && (parsed_url.pathname == '/api/users' || parsed_url.pathname == '/api/users/' || parsed_url.pathname == '/users' || parsed_url.pathname == '/users/')) {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsed_body = body ? JSON.parse(body) : {};
                const { full_name, email, phone, gender, city, state, country } = parsed_body;

                const new_id = Users.length > 0 ? Users[Users.length - 1].id + 1 : 1;

                const new_user = {
                    id: new_id,
                    full_name: full_name || "N/A",
                    email: email || "N/A",
                    phone: phone || "N/A",
                    gender: gender || "N/A",
                    city: city || "N/A",
                    state: state || "N/A",
                    country: country || "N/A"
                };

                Users.push(new_user);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify(new_user));

            }
            catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Invalid JSON Body Sent!' }));
            };
        });
        return;
    };

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found!');
});

server.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});