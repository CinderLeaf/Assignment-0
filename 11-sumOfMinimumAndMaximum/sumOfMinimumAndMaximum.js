function sumOfMinimumAndMaximum(nums) {
  const arr = nums;
  console.log(Math.max(...arr) + Math.min(...arr));
}
sumOfMinimumAndMaximum([2,4,5,6,23])
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;