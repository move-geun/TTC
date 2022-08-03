var a = require("fs").readFileSync("/dev/stdin").toString();

let aws = 0;
let i;
for (i = 1; i <= a; i++) {
  aws += i;
}
console.log(aws);
