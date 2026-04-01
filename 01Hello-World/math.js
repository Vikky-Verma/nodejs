// this is first method to export functions from math.js file and import it in hello.js file

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// module.exports = {
//     add: add,
//     subtract: subtract,
// };


// this is second method to export functions from math.js file and import it in hello.js file

// exports.add = function(a, b) {
//     return a + b;
// }

// exports.subtract = function(a, b) {
//     return a - b;
// }


// third method to export functions from math.js file and import it in hello.js file
exports.add = (a, b) => a + b;

exports.subtract = (a, b) => a - b;