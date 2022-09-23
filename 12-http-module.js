const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write("Hello Node.js");
    // res.end();
    if (req.url === '/') {
        res.end("Welcome to Node.js")
    }
    if (req.url === '/about') {
        res.end("Welcome to About Section")
    }
    res.end(`
    <h1>OOps!</h1>
    <p>We can't seem to find the page your are looking for</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(1200);