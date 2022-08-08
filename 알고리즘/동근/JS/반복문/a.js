var fs = require("fs"); // 파일 읽기 위한 fs를 불러오고
var input = fs.readFileSync("./test").toString().split("\n"); // 한 줄씩 받아오겠다.

console.log(input);
