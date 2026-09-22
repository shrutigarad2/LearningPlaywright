let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let num = [10, 2, 20, 1];
console.log(num.sort());

num.sort((a, b) => a - b); //Ascending
console.log(num);

num.sort((a, b) => b - a); //Descending
console.log(num);