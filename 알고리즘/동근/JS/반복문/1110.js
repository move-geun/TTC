var input = Number(require("fs").readFileSync("/dev/stdin").toString());

let cnt = 0;
let num = input;
while (true) {
  let a = Math.floor(num / 10);
  let b = num % 10;
  let c = (a + b) % 10;
  num = b * 10 + c;
  cnt += 1;
  if (num == input) break;
}
console.log(cnt);
