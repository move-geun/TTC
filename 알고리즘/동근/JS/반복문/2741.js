var input = Number(require("fs").readFileSync("/dev/stdin").toString());

let lst = "";

for (let i = 1; i <= input; i++) {
  lst += i + "\n";
}
console.log(lst);
