const http = require('http'); // core module so we can also write like require('node:http)

const server = http.createServer(function(req, res){
    if(req.url === "/secret"){
        res.end("This is the secret");
    }
    res.end("Hello world");
})

server.listen(7777);
