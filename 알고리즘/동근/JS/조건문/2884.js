var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

let time = +input[0];
let min = +input[1];

if (min < 45) {
  min = 60 + (min - 45);
  if (time == 0) {
    time = 23;
  } else {
    time -= 1;
  }
} else {
  min -= 45;
}
console.log(`${time} ${min}`);
