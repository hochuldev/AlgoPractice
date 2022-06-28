function solution(numbers, target){
  let combination = makeCombination(numbers, numbers.length);
  counter = 0;
  combination.forEach( (combo) => {
    let sum = combo.reduce( (acc, number) => acc+=number);
    if( sum === target ) counter++;
  } );
  return counter;
}

function makeCombination(numbers, k){

  if( k === 1 ) {
    let returnValue = numbers.map( (number) => [number] );
    return returnValue.concat( numbers.map( (number) => [-1*number] ) );
  }

  let answer = [];
  for( let i = 0; i < numbers.length; i++ ){
    let currentPick1 = numbers[i];
    let currentPick2 = -1 * numbers[i];
    let newNumbers = numbers.slice(i+1);
    if( newNumbers.length < k - 1 ) break;
    let combinationTillNow = makeCombination(newNumbers, k-1);

    let combinationTillNow1 = JSON.parse(JSON.stringify(combinationTillNow));
    let combinationTillNow2 = JSON.parse(JSON.stringify(combinationTillNow));
    combinationTillNow1 = combinationTillNow1.map( (combination) => {
      combination.unshift(currentPick1);
      return combination;
    } );
    answer = answer.concat(combinationTillNow1);
    combinationTillNow2 = combinationTillNow2.map( (combination) => {
      combination.unshift(currentPick2);
      return combination;
    } );
    answer = answer.concat(combinationTillNow2);
  }
  return answer;
}