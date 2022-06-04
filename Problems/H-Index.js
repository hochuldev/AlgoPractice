// 프로그래머스 문제: H-Index
function solution(citations) {
  citations.sort((a, b) => a - b);
  let h = 0;
  while (isValid(citations, h + 1)) {
    h++;
  }
  return h;
}

function isValid(citations, h) {
  let index;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= h) {
      index = i;
      break;
    }
  }

  return citations.length - index >= h;
}

let citations = [3, 0, 6, 1, 5];

console.log(solution(citations));
