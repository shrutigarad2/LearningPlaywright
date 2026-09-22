//Chek if somthing is an array

let result = Array.isArray([1, 2, 34, 5]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);

//let result2 = Array.isArray([a, 30, b, 24]);
//console.log(result2);

//every and some
let r = [60, 80, 50].every(s => s >= 70);
console.log(r);

let a = [90, 70, 88].every(s => s >= 70);
console.log(a);

//some -At lest one must pass
let b = [30, 20, 90].some(s => s >= 70);
console.log(b);