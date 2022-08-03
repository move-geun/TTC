var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = +input[0];
const b = +input[1];
const c = +input[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
