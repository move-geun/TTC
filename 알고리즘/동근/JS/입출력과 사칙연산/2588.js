var fs = require("fs");
var input = fs.readFileSync("./test").toString().split();

const a = +input[0];
let aws = 0;

let i;
for (i = 0; i < 3; i++) {
  console.log(a * parseInt(input[1][i]));
  aws += a * parseInt(input[1][i]);
}
console.log(aws);
