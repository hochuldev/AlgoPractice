

function combination(possibleNumbers, k){
  
  if( k === 1 ) return possibleNumbers.map( (number) => [number] );

  // recursive case
  let answer;
  for( let i = 0 ; i < possibleNumbers.length; i++ ){
    let currentPick = possibleNumbers[i];
    let newPossibleNumbers = possibleNumbers.slice(i+1);
    if( newPossibleNumbers.length < k - 1 ) break;
    let combinationTillNow = combination(newPossibleNumbers, k-1);
    combinationTillNow = combinationTillNow.map( (combination) => {
      combination.unshift(currentPick);
      return combination;
    } );
    if(answer === undefined) {
      answer = combinationTillNow;
    }
    else answer = answer.concat(combinationTillNow);
  }

  return answer;
  
}

console.log( combination([1,2,3,4,5], 3) );