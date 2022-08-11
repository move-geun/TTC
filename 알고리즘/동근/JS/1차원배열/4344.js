var input = require("fs").readFileSync("./test").toString().trim().split("\n");
const t = +input[0];

for (let i = 1; i <= t; i++) {
  const a = input[i][0];
  const avg = (Math.sum(input[i]) - a) / a;
  let cnt = 0;
  for (let j = 1; j <= a; j++) {
    if (input[i][j] > avg) {
      cnt++;
    }
  }
  console.log((cnt / a) * 100);
}
