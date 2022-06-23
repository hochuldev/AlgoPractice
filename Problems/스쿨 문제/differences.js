function solution(N, K) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    for( let j = 1; j <= N; j++ ){
      if (j - i === K || i-j === K) arr.push(j);
    }
  }
  if( arr.length !== N ) return -1;
  return arr;
}