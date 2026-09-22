let a = [1, 2];
let b = [3, 4];
let c = a.concat(b, [5, 6]);
console.log(c);

//spread (modern way) concatenation(...)

let d = [...a, ...b];
console.log(d);

//join
let s = ["pass", "fail", "skip"].join(",");
console.log(s);

let x = [9, 1, 2001].join("-");
console.log(x);