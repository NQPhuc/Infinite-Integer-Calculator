// let http = require('http'); // 1 - Import Node.js core module
// const port = process.env.PORT || 3000
// let fs = require('fs');

// let server = http.createServer(function (request, response) {   // 2 - creating server
//     //handle incomming requests here..
//     //console.log("HERE" + reqNum);
//     // set response header
//     response.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//     // set response content    
//     //res.write('<html><body><p>This is home Page.</p></body></html>');
//     fs.readFile('test.html', function (err, html) {
//         if (err) {
//             response.writeHead(404);
//             respone.write('file not found');
//             response.end();
//             throw err;  
//         }
//         else{
//             response.write(html);
//             response.end();  
//         }
//     }); 
    
// });

// server.listen(port); //3 - listen for any incoming requests

const express = require('express')
const app = express()
const port = process.env.PORT || 3030
const calculate = require('./calc.js')

app.get('/', (req, res) => {
    console.log(req.query);
    res.send(calculate(req.query.a, req.query.b, req.query.op))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})