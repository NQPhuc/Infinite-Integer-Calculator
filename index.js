let http = require('http'); // 1 - Import Node.js core module
const port = process.env.PORT || 3000
let fs = require('fs');

let server = http.createServer(function (request, response) {   // 2 - creating server
    //handle incomming requests here..
    //console.log("HERE" + reqNum);
    // set response header
    response.writeHead(200, { 'Content-Type': 'text/html' }); 
        
    // set response content    
    //res.write('<html><body><p>This is home Page.</p></body></html>');

    fs.readFile('./test.html', function (err, html) {
        if (err) {
            response.writeHead(404);
            respone.write('file not found');
        }
        else{
            response.write(html);  
        }
    });
    
    res.end();
});

server.listen(port); //3 - listen for any incoming requests
