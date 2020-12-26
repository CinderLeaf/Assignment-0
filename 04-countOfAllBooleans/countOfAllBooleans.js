function countOfAllBooleans(arr) {
  console.log(arr.filter(Boolean).length);
}
countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]);

// Do not edit this line;
module.exports = countOfAllBooleans;