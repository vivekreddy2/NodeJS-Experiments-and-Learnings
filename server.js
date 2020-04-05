const http = require('http');

console.log('running');
return http
        .createServer((req, res) => {
            res.end('test');
        })
        .listen(8080);