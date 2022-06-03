// 프로그래머스 문제: 숫자 문자열과 영단어 링크: https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const numberDict = createNumberDict( s );
  let tempString = "";
  let answer = "";
  for( let i = 0; i < s.length; i++ ){
      tempString += s[i];
      if(numberDict.has(tempString)){
        answer += numberDict.get( tempString );
        tempString = "";
      }
  }
  return parseInt(answer);
}

function createNumberDict( s ) {
  const numberDict = new Map();
  numberDict.set("zero", 0);
  numberDict.set("one", 1);
  numberDict.set("two", 2);
  numberDict.set("three", 3);
  numberDict.set("four", 4);
  numberDict.set("five", 5);
  numberDict.set("six", 6);
  numberDict.set("seven", 7);
  numberDict.set("eight", 8);
  numberDict.set("nine", 9);
  numberDict.set("0", 0);
  numberDict.set("1", 1);
  numberDict.set("2", 2);
  numberDict.set("3", 3);
  numberDict.set("4", 4);
  numberDict.set("5", 5);
  numberDict.set("6", 6);
  numberDict.set("7", 7);
  numberDict.set("8", 8);
  numberDict.set("9", 9);
  return numberDict;
}