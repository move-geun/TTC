var input = require("fs").readFileSync("./test").toString();
const [a, b, c, d, e, f] = input.split(" ").map(Number);

console.log(`${1 - a} ${1 - b} ${2 - c} ${2 - d} ${2 - e} ${8 - f}`);
