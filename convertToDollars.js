// Module Two - Convert a Number to a USD Value
// The second module should accept a number and convert it to a USD value.
// You can find good implementations of this online.

function convertToDollars(number){
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

module.exports=convertToDollars;
