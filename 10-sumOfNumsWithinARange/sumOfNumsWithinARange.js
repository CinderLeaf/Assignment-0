function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;
  for(var i = 0; i < nums.length; i++)
  {
    if(i >= start && i <= end)
    count++;
  }
  console.log(count);
}
sumOfNumsWithinARange([2,4,5,6,23], 2, 23);
// Do not edit this line;
module.exports = sumOfNumsWithinARange;