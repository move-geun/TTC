var fs = require("fs");
var a = fs.readFileSync("/dev/stdin").toString();

if (a % 4 == 0) {
  if (a % 100) {
    console.log(1);
  } else if (!(a % 400)) {
    console.log(1);
  } else {
    console.log(0);
  }
} else {
  console.log(0);
}
