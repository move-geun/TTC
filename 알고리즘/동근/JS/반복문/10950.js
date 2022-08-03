var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];
let i;

for (i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}
