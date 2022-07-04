function solution(n, k, thieves) {
  thieves.sort( (a,b) => a-b );
  let timePassed = 0;
  let escaped = 0;
  for( let i = 0; i < thieves.length; i++ ){
      let closestThief = thieves.pop();
      timePassed += n - closestThief;
      if(timePassed >= closestThief) break;
      escaped++;
  }
  return escaped;
}