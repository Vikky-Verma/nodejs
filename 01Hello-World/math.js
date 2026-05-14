// this is first method to export functions from math.js file and import it in hello.js file

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }


// to export functions from math.js file we have to use module.exports object and assign the functions to it like this: this is overright the export functinon from math.js file and import it in hello.js file
// module.exports.add = add;
// module.exports.subtract = subtract;


// to return multiple functions from math.js file we have to use module.exports object and assign the functions to it like this:
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
exports.add = (a, b) => a + b; // anonymous function

exports.subtract = (a, b) => a - b;