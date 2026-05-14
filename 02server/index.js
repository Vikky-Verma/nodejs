// main file of the server folder

const http = require("http") // this will import http module which is built in module in node.js
const fs = require("fs") // this will import fs module which is built in module in node.js

// const myServer = http.createServer((req, res) => {
//     // console.log("New Request Received");
//     console.log(req);
//     res.end("Hello From Server Again");
// }); // this will create a server using http module

// how to make a own server using http module and how to handle different routes
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} - New Request Received\n`;
    fs.appendFile('log.txt',log, (err, data) => {
        switch (req.url){
            case "/":
               res.end("HomePage");
               break;
            case "/about":
                res.end("I am a Vikky Verma");
                break;
            default:
                res.end("404 Not Found");   
        }
    });
}); 

myServer.listen(8000, () => console.log("Server Started!")); // this will start the server and listen on port 8000