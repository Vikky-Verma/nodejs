const fs = require("fs");
const os = require('os');


// Sync... Blocking....
// fs.writeFileSync("./test.txt", "Hello world");

// Async... Non-Blocking Request....
// fs.writeFile("./test.txt", "Hello World Async", (err)=> {})

// console.log("1");
// Blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// console.log("2");
// output
// 1
// Vikky Verma: +911111111111
// 2




// console.log("1");
// // Non - Blocking...
// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     console.log(result);
// });
// console.log("2");

// output 
// 1
// 2
// Vikky Verma: +911111111111


// By default thread pool size = 4
// Max? - 8core cpu - 8 thred

console.log(os.cpus().length); // this will return the number of cpu cores in the system