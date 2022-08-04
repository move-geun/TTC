var t = Number(require("fs").readFileSync("/dev/stdin").toString());

for (let i = 1; i <= t; i++) {
  let aws = "";
  for (let j = t - 1; j >= 0; j--) {
    aws += j >= i ? " " : "*";
  }
  console.log(aws);
}
