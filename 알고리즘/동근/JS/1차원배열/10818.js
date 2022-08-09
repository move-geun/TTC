var input = require("fs").readFileSync("./test").toString().split("\n");
const t = +input[0];

let nums = input[1].split(" ").map(Number);
console.log(nums);
let max = nums[0];
let min = nums[0];
for (let i = 1; i < t; i++) {
  if (max < nums[i]) {
    max = nums[i];
  }
  if (min > nums[i]) {
    min = nums[i];
  }
}
console.log(`${min} ${max}`);
