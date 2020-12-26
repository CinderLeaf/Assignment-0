function productOfAnyAmountOfNumbers(...args) {
  var product = 1;
  
  for(var i = 0; i < args.length; i++){
    product *= args[i];
  }
  console.log(product);
}
productOfAnyAmountOfNumbers(2,4,6)
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;