// The third module should require the other two modules (i.e. Module One and
// Module Two). It should also have two exported functions:
//
// The first function should call Module 2, passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

var randomNumber = require('./randomNumber');  //-->we exported a function
var convertToDollars = require('./convertToDollars');

function randoToConvert(){
  return convertToDollars(randomNumber(100,1000000));
}

function balance (){
  return 'Account balance: \n';
}

module.exports = {
  account: balance,
  converter: randoToConvert
};
