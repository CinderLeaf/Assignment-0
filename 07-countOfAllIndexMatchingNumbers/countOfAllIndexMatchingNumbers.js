function countOfAllIndexMatchingNumbers(nums) {
  var ans = 0;
  var n = nums.length;

  for(var i = 0; i < n; i ++){
    for(var j = i+1; j < n; j++){
      if(nums[i] == nums[j])
      ans++;
    }
  }
  console.log(ans);
}
countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]);
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;