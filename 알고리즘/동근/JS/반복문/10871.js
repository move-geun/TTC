var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
let aws = "";

let arr = input[1].split(" ").map((x) => Number(x));
for (let i = 0; i < a; i++) {
  if (arr[i] < b) {
    aws += arr[i] + " ";
  }
}
console.log(aws);
