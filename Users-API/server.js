// ||-----------------------------||
// || Users API Using HTTP Server ||
// ||-----------------------------||

// const http = require('http');
// const url = require('url');
// const Users = require('./users.json');
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     const parsed_url = url.parse(req.url, true);
//     const matched_json_path = parsed_url.pathname.match(/^\/api\/users\/(\d+)\/?$/);
//     const matched_table_path = parsed_url.pathname.match(/^\/users\/(\d+)\/?$/);

//     if (parsed_url.pathname === '/api/users' || parsed_url.pathname === '/api/users/') {
//         return res.end(JSON.stringify(Users));
//     };

//     if (matched_json_path) {
//         const user_id = Number(matched_json_path[1]);
//         const user = Users.find((u) => u.id === user_id);

//         if (user) {
//             return res.end(JSON.stringify(user));
//         } else {
//             return res.end(JSON.stringify({ error: 'User Not Found!' }));
//         };
//     };

//     if (parsed_url.pathname === '/' || parsed_url.pathname === '/users' || parsed_url.pathname === '/users/') {
//         return res.end(
//             `
//                 <table style="height: auto; width: 100%;">
//                     <thead>
//                         <tr style="font-weight: bold;">
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User ID</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Name</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User E-Mail</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Phone</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Gender</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User City</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User State</td>
//                             <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Country</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         ${Users.map((user) => (
//                             `
//                                 <tr>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px"><b>${user.id}.</b></td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.full_name}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.email}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.phone}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.gender}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.city}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.state}</td>
//                                     <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.country}</td>
//                                 </tr>
//                             `
//                         )).join('')}
//                     </tbody>
//                 </table>
//                 \n
//             `
//         );
//     };

//     if (matched_table_path) {
//         const user_id = Number(matched_table_path[1]);
//         const user = Users.find((u) => u.id === user_id);

//         if (user) {
//             return res.end(
//                 `
//                     <table style="height: auto; width: 100%;">
//                         <thead>
//                             <tr style="font-weight: bold;">
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User ID</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Name</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User E-Mail</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Phone</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Gender</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User City</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User State</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">User Country</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px"><b>${user.id}.</b></td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.full_name}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.email}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.phone}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.gender}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.city}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.state}</td>
//                                 <td style="border: 1px solid black; height: auto; width: auto; padding: 5px">${user.country}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     \n
//                 `
//             );
//         } else {
//             return res.end('User Not Found!');
//         };
//     };
//     res.end('Page Not Found!');
// });

// server.listen(PORT, () => {
//     console.log(`Server Is Running On Port ${PORT}!`);
// });



// ||-----------------------------------||
// || Users API Using Express JS Server ||
// ||-----------------------------------||

const express = require('express');
const PORT = process.env.PORT || 3000;
const Users = require('./users.json');

const app = express();

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});

app.get('/api/users', (req, res) => {
    res.status(200).set({ 'Content-Type': 'application/json' });
    res.json(Users);
});

app.get('/api/users/:id', (req, res) => {
    const user_id = Number(req.params.id);
    const user = Users.find((u) => u.id === user_id);

    if (user) {
        res.status(200).set({ 'Content-Type': 'application/json' });
        res.json(user);
    }
    else {
        res.status(404).set({ 'Content-Type': 'application/json' });
        res.json({ error: 'User Not Found!' });
    };
});

app.get(['/', '/users'], (req, res) => {
    return res.send(
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
});

app.get('/users/:id', (req, res) => {
    const user_id = Number(req.params.id);
    const user = Users.find((u) => u.id === user_id);

    if (user) {
        return res.send(
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
    } else {
        return res.send('User Not Found!');
    }
});

app.use((req, res) => {
    res.send('Page Not Found!');
});