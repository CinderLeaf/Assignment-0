function sumOfAllOddNumbers(nums) {
  var sum = 0;
  for(var i = 0; i< nums.length; i++) {
    if(i % 2 === 1) {
    sum = sum + i;
}
}
console.log(sum);
}
sumOfAllOddNumbers([0,1,2,3,4,5,6,7]);
// Do not edit this line;
module.exports = sumOfAllOddNumbers;