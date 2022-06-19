/*
재귀적으로 풀었더니, 효율성 문제가 생긴다.
TODO: 반복문으로 바꿔서 효율성을 제고하자.
*/
function solution(number, k) {
  let numberOfDigit = number.length - k
  if( numberOfDigit <= 0 ) return 0;
  number = number.split("");
  return solutionImplementation(number, numberOfDigit).join("");
}

function solutionImplementation(number, numberOfDigit) {
  
  if( numberOfDigit === 1 ){
    let ans = [Math.max.apply(null, number)];
    // return [Math.max.apply(null, number)];
    return ans;
  }
  
  let possibleNumber = number.slice(0, number.length - numberOfDigit + 1);
  let currentNumber = Math.max.apply(null, possibleNumber);
  let nextPossibleNumber = number.slice(number.indexOf(String(currentNumber)) + 1, number.length);
  let answer = solutionImplementation(nextPossibleNumber, numberOfDigit - 1);
  answer.unshift(currentNumber);
  return answer;
}