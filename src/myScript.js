// CLOSURES
// A function togather bundled with its lexical environment (lexical scope) 
function closureExample() {
    // Use let instead of var will do the job without using wrapper function, setTimeout create a new copy (of containing function) of closures with different i values
    for (var i = 0; i <= 5; i++) {
        // In case of var, we have to wrap the setTimeout in a new function.
        function myFunction(x) {
            setTimeout(function () {
            console.log(x);
            }, x * 1000);
        }
        // Every time we call this function with i, it create a new capy of x with the i' value at line number 132..
        myFunction(i);
    }
}
closureExample();
// if the function executed in the other scope it still remembers its lexical environment
// function outer() {
//     var a = 5;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// outer();
//
// function x() {
//     var a = 10;
//     function add(b) {
//         return a + b;
//     }
//     return add;
// }
// var c = x();
// var sum = c(20);
// console.log(sum); // it will output 30

// HOISTING
// Accessing varibles and functions even before initializing it, or putting some value in it, without any error
getValue();
console.log("value of a :: ", a);
console.log(getValue);
var a = 5; // try with let and const
// allocate space for this function at the beginning of execution
function getValue() {
    console.log("function getValue() just called!");
}
// dont allocate space for this at the beginning of execution cause of var type
var getData = () => {
    console.log("function getData() just called!");
};

// CALL, APPLY AND BIND
let car = {
    company: "Jeep",
    model: "Compass"
}
let printDetails = function (year, color) {
    console.log(this.company + " " + this.model + " " + year + " " + color);
}
// call method used to invoke a function directly by passsing the reference (car) which points to this variable inside the method (printDetails)
printDetails.call(car, "2021", "White");

let bike = {
    company: "Royal Enfield",
    model: "Interceptor 650"
}

// apply is eactly same as call method, difference is that it takes second argument as array list of the parameters which need to be passed to the printDetails function
printDetails.apply(bike, ["2020", "Black"]);

// bind method does not directly invoke the method but gives you the copy of the exactly same method which can be invoked later
let myCarInfo = printDetails.bind(car, "2021", "Pearl White");
console.log(myCarInfo); // prints the function printDetails
myCarInfo(); 