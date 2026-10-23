# HTTP-Server
Terminal Command :
```
npm start
```
Open These Links In Browser :
```
http://localhost:3000
```

# HTTP-Routing
Terminal Command :
```
npm start
```
Open These Links In Browser :
```
http://localhost:3000
```
```
http://localhost:3000/about
```
```
http://localhost:3000/contact
```
```
http://localhost:3000/search
```
*Default :*
```
http://localhost:3000/*anything*
```

# HTTP-Middleware
Terminal Command :
```
npm start
```
Open These Links For Auth Middleware In Browser :
```
http://localhost:3000
```
```
http://localhost:3000/about
```
```
http://localhost:3000/dashboard
```
```
http://localhost:3000/dashboard?role=admin
```
*Default :*
```
http://localhost:3000/*anything*
```
Check The Update On UI.<br>
Check The Console For Login Middleware.

# Express-JS-Server
Terminal Command :
```
npm start
```
Open These Links In Browser :
```
http://localhost:3000
```

# Express-JS-Routing
Terminal Command :
```
npm start
```
Open These Links In Browser :
```
http://localhost:3000
```
```
http://localhost:3000/about
```
```
http://localhost:3000/contact
```
```
http://localhost:3000/search
```
*Default :*
```
http://localhost:3000/*anything*
```

# Express-JS-Middleware
Terminal Command :
```
npm start
```
Open These Links For Auth Middleware In Browser :
```
http://localhost:3000
```
```
http://localhost:3000/about
```
```
http://localhost:3000/dashboard
```
```
http://localhost:3000/dashboard?role=admin
```
*Default :*
```
http://localhost:3000/*anything*
```
Check The Update On UI.<br>
Check The Console For Login Middleware.

# FS-Module (Built Using Both HTTP Server & Express JS Server)
Terminal Command :
```
node http_server.js
```
```
node express_js_server.js
```
Open This Link In Browser :
```
http://localhost:3000
```
Change URL Path(s) & Check *logs.txt* File.

# URL-Params (Built Using Both HTTP Server & Express JS Server)
Terminal Command :
```
node http_server.js
```
```
node express_js_server.js
```
Open This Link In Browser :
```
http://localhost:3000
```
Add ID & Name In /about URL As :
```
http://localhost:3000/about?id=1&name=hitarth+pathak
```
Add E-Mail & Number In /contact URL As :
```
http://localhost:3000/contact?email=hitarth@gmail.com&number=9876543210
```
Add Search Query In /search URL As :
```
http://localhost:3000/search?query=node+js+tutorial
```
*Default :*
```
http://localhost:3000/*anything*
http://localhost:3000/about/*anything*
http://localhost:3000/contact/*anything*
http://localhost:3000/search/*anything*
```
Check The Update On UI.

# Users-API (Built Using Both HTTP Server & Express JS Server)
Terminal Command :
```
node http_server.js
```
```
node express_js_server.js
```

### GET API :-
Open These Links In Browser To Get All Users Data In Table :
```
http://localhost:3000

http://localhost:3000/
```
```
http://localhost:3000/users

http://localhost:3000/users/
```
Open This Link In Browser To Get Individual User's Data Through ID In Table :
```
http://localhost:3000/users/25

http://localhost:3000/users/25/
```
Open These Links In Browser To Get All Users Data In JSON :
```
http://localhost:3000/api/users

http://localhost:3000/api/users/
```
Open This Link In Browser To Get Individual User's Data Through ID In JSON :
```
http://localhost:3000/api/users/25

http://localhost:3000/api/users/25/
```
*Default :*
```
http://localhost:3000/*anything*
http://localhost:3000/users/*anything*
http://localhost:3000/users/25/*anything*
http://localhost:3000/api/*anything*
http://localhost:3000/api/users/*anything*
http://localhost:3000/api/users/25/*anything*
```

### POST API :-
Send This Data In Thunder Client On Following Paths To Test The POST API :
```
{
  "full_name": "Hitarth Pathak",
  "email": "hitarth@gmail.com",
  "phone": "987-654-3210",
  "gender": "Male",
  "city": "Bangalore",
  "state": "Karnataka",
  "country": "India"
}
```
```
http://localhost:3000/users
```
```
http://localhost:3000/users/
```
```
http://localhost:3000/api/users
```
```
http://localhost:3000/api/users/
```
Check The Result (Updated List) On UI.

### PATCH API :-
Send This Data In Thunder Client On Following Path To Test The PATCH API :
```
{
  "email": "*updated-email@gmail.com*",
  "phone": "*updated-number*"
}
```
```
http://localhost:3000/api/users/*id*
```
Check The Result (Updated List) On UI.

### PUT API :-
Send This Data In Thunder Client On Following Path To Test The PUT API :
```
{
  "full_name": "Hitarth Pathak",
  "email": "hitarth@gmail.com",
  "phone": "987-654-3210",
  "gender": "Male",
  "city": "Bangalore",
  "state": "Karnataka",
  "country": "India"
}
```
```
http://localhost:3000/api/users/*id*
```
Check The Result (Updated List) On UI.

### DELETE API :-
Enter An ID In The Following Path To Delete It From The List. Leave The Body Empty.
```
http://localhost:3000/api/users/*id*
```
Check The Result (Updated List) On UI.

# Real-Time Communication
Terminal Command :
```
node http_server.js
```
```
node express_js_server.js
```
Open This Link In Browser :
```
http://localhost:3000
```

### Polling :
Paste This In Browser Console To Communicate To The Server :
```
console.log('=== Polling ===');

async function send_request() {
    console.log('Connected To Server!');
    console.log('[Browser] : Hey Server! What Date & Time Is It?');
    try {
        const response = await fetch('http://localhost:3000/?data=true');
        const text_data = await response.text();

        console.log(`[Server] : ${text_data}`);
        console.log('Disconnected From Server!');
    }
    catch (error) {
        console.error(`Error Connecting To Server : ${error.message}`);
    };
};
```
To Get The Next Message From Server, Call The send_request() Function Again :
```
send_message();
```

### Server-Sent Events (SSE) :
Paste This In Browser Console To Communicate To The Server :
```
console.log('=== Server-Sent Events ===');

async function send_request() {
    console.log('Connected To Server!');
    console.log('[Browser] : Hey Server! Stream The Live Date & Time Updates!');
    try {
        const event_source = new EventSource('http://localhost:3000/?data=true');
        event_source.onmessage = (event) => {
            console.log(`[Server] : ${event.data}`);
        };
        event_source.onerror = (err) => {
            console.error("[SSE] Stream Connection Error or Disconnect : ", err);
        };
    }
    catch (error) {
        console.error(`Error Connecting To Server : ${error.message}`);
    };
};
```
Check The Results On Browser Console. Reload The Page To Stop The Connection.

### WebSockets :
Paste This In Browser Console To Communicate To The Server :
```
console.log('=== WebSockets ===');

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('WebSocket Connection Opened On Browser!');
};

socket.onmessage = (event) => {
    console.log(`${event.data}`);
};

function send_message(text) {
    socket.send(text);
};
```
To Get The Next Message From Server, Call The send_request() Function Again With Your Message :
```
send_message('*your-message*');
```