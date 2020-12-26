function frequencyCounter(word) {
  var freq = {};
  for(var i = 0; i < word.length; i++){
    var char = word.charAt(i);
    if(freq[char]){
      freq[char]++;
    }
    else{
      freq[char] = 1;
    }
  }
  console.log(freq);
}
frequencyCounter("this assignment is killing me jk");
// Do not edit this line;
module.exports = frequencyCounter;