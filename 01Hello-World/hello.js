console.log("hey there! I am JS");

// these are some of global objects which render only on browser node does not support these objects it remove from  node environment

// all dom related objects are removed from server side environment because there is no dom in server side environment

// to run file in node environment we have to use node command in terminal like this: node hello.js

//console.log(window); // global object in browser
//console.log(document); // DOM object in browser
//console.log(alert('hey hii!')); // alert function in browser

// how to  create a package in node 
// 1. create a folder and open it in terminal
// 2. run command npm init -y to create package.json file
// 3. create a js file and write your code in it
// 4. run the js file using node command like this: node filename.js

// to run the js file using npm script we have to add a script in package.json file like this: "start": "node filename.js"
// then we can run the js file using npm start command in terminal like this: npm start


const math = require("./math")  //this will import math.js file  when we calling we write like this math.add() and math.subtract() because we are importing whole math.js file

// const {add, subtract} = require("./math") // this is another way to import specific functions from math.js file when we calling we write like this add() and subtract() because we are importing specific functions from math.js file

console.log("Math Value is:", math.add(2,8))
console.log("Math Value is:", math.subtract(8,2))

// all built module in node list
// 1. fs module: to work with file system
// 2. http module: to create a server
// 3. path module: to work with file and directory paths

// about fs module
// fs module is used to work with file system in node.js it provides various methods to read, write, update, delete files and directories

// about http module
// http module is used to create a server in node.js it provides various methods to create a server and handle requests and responses

// about path module
// path module is used to work with file and directory paths in node.js it provides various methods to work with file and directory paths like join, resolve, dirname, basename etc.    