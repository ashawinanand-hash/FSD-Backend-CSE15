// Using Node.js's buit in http module, create an HTTP server that runs on port 3000 and returns a JSON response for every request containing id: 1 and name:"Laptop"

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    const data = {
        id: 1,
        name: "Laptop"
    };

    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});