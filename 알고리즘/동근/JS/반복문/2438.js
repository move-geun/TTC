var t = Number(require("fs").readFileSync("/dev/stdin").toString());

let aws = "";
for (let i = 1; i <= t; i++) {
  aws += "*";
  console.log(aws);
}
