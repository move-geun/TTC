var fs = require("fs");
var input = fs.readFileSync("./test").toString();

let a = +input[0];

let i;
for (i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
