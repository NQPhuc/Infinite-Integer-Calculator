var http = require('http'); // 1 - Import Node.js core module

reqNum = 0
var server = http.createServer(function (req, res) {   // 2 - creating server
    reqNum++;
    //handle incomming requests here..
    //console.log("HERE" + reqNum);
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
    // set response content    
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
});

server.listen(3000); //3 - listen for any incoming requests
