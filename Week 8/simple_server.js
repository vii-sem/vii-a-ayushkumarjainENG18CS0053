var http = require('http');
http.createServer(function(reg,res) {
    res.write('welcome to WED lab tutorial');
    res.end();
}).listen(8033);
