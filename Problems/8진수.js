/*
[문제 설명]
자연수 n이 주어질 때 n을 8진수로 변환하여 출력하는 함수, solution을 완성해주세요.

예를 들어, n의 값이 299 일 때, 결과는 '453' 입니다.

[입력 형식]
- n은 1 이상 100,000,000 이하의 자연수입니다.

[출력 형식]
- n을 8진수로 변환하여 출력합니다.
*/

function solution(n) {
  let numberOfDigit = createNumberOfDigit(n);
  let answer = "";
  let remainder = n;
  for (let i = numberOfDigit; i > 0; i--) {
    let divisor = Math.pow(8, i - 1);
    let digit = String(Math.floor(remainder / divisor));
    remainder = remainder % divisor;
    answer += digit;
  }
  return answer;
}

function createNumberOfDigit(n) {
  let hasFound = false;
  let num = 0;
  while (!hasFound) {
    num++;
    let divisor = Math.pow(8, num);
    if (Math.floor(Math.floor(n / divisor)) === 0) hasFound = true;
  }
  return num;
}
