var input = require("fs").readFileSync("./test").toString().trim().split("\n");

const aws = new Set(input.map((x) => x % 42)).size;
console.log(aws);

// const nums = [];
// input.forEach((x) => {
//   const num = x % 42;
//   if (nums.indexOf(num) == -1) {
//     nums.push(num);
//   }
// });
// console.log(nums.length);
