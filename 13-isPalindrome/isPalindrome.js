function isPalindrome(word) {
  var l = word.length;
  for (var i = 0; i < l / 2; i++) {
      if (word.charAt(i) !== word.charAt(l - 1 - i)) {
          console.log("false");
          return false;
      }
      else
      console.log("true");
      return true;
  }
}
isPalindrome("madam")
// Do not edit this line;
module.exports = isPalindrome;