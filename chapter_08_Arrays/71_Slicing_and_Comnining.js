let arr = [1, 2, 3, 4, 5];

//slice(start, end)-retrns new array, 
// does not mutate actual-> (statr,end-1), index=0 

console.log(arr.slice(1, 3));

console.log(arr.slice(0));

console.log(arr.slice(-2));

console.log(arr.slice(-3));

console.log(arr.slice(2, 4));

console.log(arr.slice(2));
// if you dont give the end it will automaticaly 
// take from start to end

console.log(arr.slice(-5));