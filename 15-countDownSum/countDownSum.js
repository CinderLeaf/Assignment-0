class MySolution {
  countDownSum(num) {
    var sum = 0;
    for(i = num; i > 0; i--){
      sum = sum[i]+i;
    }
    console.log(sum);
    return sum;
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;