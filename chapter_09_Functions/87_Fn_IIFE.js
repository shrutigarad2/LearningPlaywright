//immediatly invoked function expression(IIFE)
//they dont need to be called

function name1() {
    console.log("Hi");
}
name1();

//IIFE 
(function () {
    console.log("Hello");
})();