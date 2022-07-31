var fs = require("fs");
var name = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`${name}??!`);
