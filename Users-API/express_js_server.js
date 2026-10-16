const express = require('express');
const PORT = process.env.PORT || 3000;
const Users = require('./users.json');

const app = express();

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}!`);
});

// GET API Using Express JS Server

app.get('/api/users', (req, res) => {
    res.status(200).set({ 'Content-Type': 'application/json' });
    res.json(Users);
});

app.get('/api/users/:id', (req, res) => {
    const user_id = Number(req.params.id);
    const user = Users.find((u) => u.id == user_id);

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
    res.status(200).set({ 'Content-Type': 'text/html' });
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
    const user = Users.find((u) => u.id == user_id);

    if (user) {
        res.status(200).set({ 'Content-Type': 'text/html' });
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
    }
    else {
        res.status(404).set({ 'Content-Type': 'text/plain' });
        return res.send('User Not Found!');
    };
});

// POST API Using Express JS Server

app.use(express.json());

app.post(['/api/users', '/api/users/', '/users', '/users/'], (req, res) => {
    const { full_name, email, phone, gender, city, state, country } = req.body;

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

    res.status(200).set({ 'Content-Type': 'application/json' });
    res.json(new_user);
});

app.use((req, res) => {
    res.status(404).set({ 'Content-Type': 'text/plain' });
    res.send('Page Not Found!');
});