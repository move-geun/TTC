var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = +input[0];
let aws = 0;

let i;
for (i = 2; i > -1; i--) {
  console.log(a * parseInt(input[1][i]));
  aws += a * parseInt(input[1][i]) * 10 ** (2 - i);
}
console.log(aws);
