function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
// console.log(randomNumber(100,100000));  use this to test/log in terminal by calling the file "node randomNumber.js"
// OR
// var foo = randomNumber(100,1000000);
// console.log(foo);

module.exports = randomNumber;


// Module One - Generate a Random Number
// The first module will export a function that returns a random number after
// taking in a min and max value as arguments (hint: you can use random number
// functions from previous assignments). When you call this module, use 100 as
// your min, and 1000000 as your max.
