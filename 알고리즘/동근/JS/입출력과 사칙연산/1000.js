var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
