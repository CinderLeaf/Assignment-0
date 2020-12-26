function sumOfAllEvenNumbers(nums) {
  var sum = 0;
  for(var i = 0; i< nums.length; i++) {
    if(i % 2 === 0) {
    sum = sum + i;
}
}
console.log(sum);
}
sumOfAllEvenNumbers([0,1,2,3,4,5]);
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;