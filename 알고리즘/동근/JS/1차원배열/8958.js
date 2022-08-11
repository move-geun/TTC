var input = require("fs").readFileSync("./test").toString().trim().split("\n");

const t = +input[0];
for (let i = 1; i <= t; i++) {
  const str = input[i].split("");
  let sum = 0;
  let point = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] == "O") {
      point++;
    } else {
      point = 0;
    }
    sum += point;
  }
  console.log(sum);
}
