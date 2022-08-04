var input = Number(require("fs").readFileSync("/dev/stdin").toString());

let i;
let lst = "";

for (i = input; i >= 1; i--) {
  lst += i + "\n";
}
console.log(lst);
