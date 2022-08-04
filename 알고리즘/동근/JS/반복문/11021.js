var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const t = +input[0];
let i;

for (i = 1; i <= t; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a + b}`);
}
