//without function-repeated logic 

let score1 = 85;
let result1 = score1 > 70 ? "pass" : "fail";
console.log(result1);

let score2 = 30;
let result2 = score2 > 70 ? "pass" : "fail";
console.log(result2);

let score3 = 70;
let result3 = score3 > 70 ? "pass" : "fail";
console.log(result3);

// with function
/*1.define a function, 2.calling of function

//define

function name (parameter){
    // code that you want to execute
}
//calling
name(90);
*/

function getResult(score) {
    return score >= 70 ? "pass" : "fail";
}

console.log(getResult(90));
console.log(getResult(30));
console.log(getResult(70));
