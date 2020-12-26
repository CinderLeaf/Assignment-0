function countOfAllBooleansAndStrings(arr) {
  console.log(arr.filter(Boolean).length);
}
countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]);
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;