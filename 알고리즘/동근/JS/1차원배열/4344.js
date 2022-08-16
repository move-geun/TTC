var input = require("fs").readFileSync("./test").toString().trim().split("\n");
const t = +input[0];
for (let i = 1; i <= t; i++) {
  let nums = input[i].split(" ").map(Number);
  let a = nums[0];
  let avg = nums.reduce((sum, v) => (sum += v), -a);
  avg /= a;
  let cnt = 0;
  for (let j = 1; j <= a; j++) {
    if (nums[j] > avg) {
      cnt++;
    }
  }
  console.log(((cnt / a) * 100).toFixed(3) + "%");
}
