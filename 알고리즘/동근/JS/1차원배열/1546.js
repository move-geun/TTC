var input = require("fs").readFileSync("./test").toString().trim().split("\n");

const t = +input[0];
const nums = input[1].split(" ").map((x) => Number(x));
const max = Math.max(...nums);

let sum = 0;
for (let i = 0; i < t; i++) {
  sum += (nums[i] / max) * 100;
}
console.log(sum / t);
