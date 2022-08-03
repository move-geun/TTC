var fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let aws = 0;
if (a == b && b == c && a == c) {
  aws = 10000 + a * 1000;
} else if (a == b || a == c) {
  aws = 1000 + a * 100;
} else if (b == c) {
  aws = 1000 + b * 100;
} else {
  aws = 100 * Math.max(a, b, c);
}
console.log(aws);
