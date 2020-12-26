function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if (nums[i] < target) {
      count++;    
  }
  }
  console.log(count);
}
countOfAllNumbersSmallerThanTarget([1,2,3,4,5], 9);
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;