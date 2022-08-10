var input = require("fs").readFileSync("./test").toString().trim().split("\n");

const t = +input[0];
const nums = input[1].split(" ").map((x) => Number(x));
const max = Math.max(...nums);

nums.map((x) => (x / max) * 100);
console.log(nums);
