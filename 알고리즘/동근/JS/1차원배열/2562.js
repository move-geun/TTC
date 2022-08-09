var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
let max = input[0];
let t = 0;
for (let i = 1; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    t = i;
  }
}
console.log(max);
console.log(t + 1);
