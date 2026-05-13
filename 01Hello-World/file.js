const fs = require("fs") // this will import fs module which is built in module in node.js

// fs module is used to work with file system in node.js it provides various methods to read, write, update, delete files and directories

// wite operation in fs module
// synchronous file 
//fs.writeFileSync("./test.txt", "hey there!  this is synchronous file"); // this will create a file named test.txt and write "hey there!" in it

// asynchronous file
// fs.writeFile("./test.txt", "hey there! this is asynchronous file", (err) => {})


// Read operation in fs module
// Synchronous 
// const result = fs.readFileSync("./contacts.txt", "utf-8") // this will read the content of contacts.txt file and return it as a string
// console.log(result)

// Asynchronous  => it cant return anything because it is void it brings callback function to handle the result of asynchronous operation
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error:", err)
//     } else {
//         console.log(result)
//     }
// })


// append operation in fs module 
// fs.appendFileSync("./test.txt", `${Date.now()}  hey there \n`); // this will append "hey there!" in test.txt file

// copy operation in fs module
// fs.cpSync("./test.txt", "./copy.txt") // this will copy test.txt file to copy.txt file


// to remove file in fs module 
//fs.unlinkSync("./copy.txt") // this will delete copy.txt file

// console.log(fs.statSync("./test.txt")); // this will return the stats of test.txt file like size, created time, modified time etc. it returns an object with all the stats of the file

// create a directory in fs module 
fs.mkdirSync("mydocs")