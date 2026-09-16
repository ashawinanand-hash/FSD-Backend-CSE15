const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("Welcome Home");
        res.end();
    }

    else if (req.url == "/about") {
        res.write("About Page");
        res.end();
    }

    else {
        res.write("Page Not Found");
        res.end();
    }

});

server.listen(9000);

console.log("server started on port http://localhost:8000");