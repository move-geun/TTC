var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [time, min] = input[0].split(" ").map(Number);
let oven = +input[1];
let ot;
let om;

ot = parseInt(oven / 60);
om = oven % 60;

if (min + om >= 60) {
  time += 1;
  min = min + om - 60;
} else {
  min += om;
}
if (time + ot >= 24) {
  time = time + ot - 24;
} else {
  time += ot;
}
console.log(`${time} ${min}`);
