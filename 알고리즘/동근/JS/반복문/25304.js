var input = require("fs").readFileSync("./test").toString().split("\n");

const total = +input[0];
const time = +input[1];
let value = 0;
for (let i = 2; i <= time + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  value += a * b;
}
if (total == value) {
  console.log("Yes");
} else {
  console.log("No");
}
