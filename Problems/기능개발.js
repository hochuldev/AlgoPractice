function solution(progresses, speeds) {
  answer = [];
  progresses = progresses.map( (v, i) => [i,v] );
  loop1:
  while( progresses.length > 0 ) {
    
    let count = 0;
    while( progresses[0][1] < 100 ) {
      progresses = progresses.map( (progressArr) => [ progressArr[0] , progressArr[1] += speeds[ progressArr[0] ] ] );
    }
    
    while( progresses[0][1] >= 100 ){
      progresses.shift();
      count++;
      if( progresses.length <= 0 ) break;
    }
    answer.push(count);
  }
  return answer;
}