//Arrow function(ES6)

const greet = function (name) {
    return `Hello,${name}!`;
}

//using arrow function

const greet1 = (name1) => `hello,${name1}!`;

console.log(greet("shreya"));
console.log(greet1("swaraj"));

//if you want to make a normal function to arrow function
//Remove the keyword function, remove breaces and use the 
// equal to Arrow (=>)
//Arrow function gnerally works whenever you have a single line
const doubleIt = n => n * 2;
console.log(doubleIt(9));

//no params-parens required
const getEnv = () => "staging";
console.log(getEnv());

//suppose we have a multi line cane we use Arrow function everyehere?
//multiline need carley braces and return

const getResult = (score4) => {
    if (score4 >= 70) return "pass";
    return "fail";
}
console.log(getResult(90));