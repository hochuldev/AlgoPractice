//프로그래머스 문제: 가장 큰 수

function solution(numbers) {
  let foundNonZero = false;
  for (let i = 0; i < numbers.length; i++) {
    foundNonZero = foundNonZero || numbers[i] !== 0;
  }
  if (!foundNonZero) {
    return "0";
  }
  numbers.sort(mySort);
  const answer = numbers.join("");
  return answer;
}

function mySort(number1, number2) {
  tempNum1 = number1.toString() + number2.toString();
  tempNum2 = number2.toString() + number1.toString();
  return tempNum2 - tempNum1;
}
