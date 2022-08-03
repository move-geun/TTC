var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");

let a = +input;
let aws = a - 543;
console.log(aws);
