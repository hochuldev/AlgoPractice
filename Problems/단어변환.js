function solution(begin, target, words) {
  return permutation(words, words.length, begin, target);
}

function transformable(current, target){
  let counter = 0;
  for( let i = 0; i < current.length; i++ ){
    if(current[i] === target[i]) counter++;
  }
  return target.length - counter === 1;
}

function permutation(array, k, currentWord, target){
  if(!array.includes(target)) return 0;
  function permutationImplementation(possibleArray, k, usedArray, currentWord){
    if( currentWord === target ) throw Error(`${usedArray}`);

    //recursive case
    if(usedArray.length <= k && possibleArray.length > 0 ){
      for( let i = 0; i < possibleArray.length; i++ ){
        if( !transformable( currentWord ,possibleArray[i] ) ) continue;
        let newPossibleArr = JSON.parse( JSON.stringify(possibleArray) );
        let newUsedArr = JSON.parse( JSON.stringify(usedArray) );
        let newCurrentWord = possibleArray[i];
        newPossibleArr.splice(i, 1);
        newUsedArr.push(possibleArray[i]);
        permutationImplementation(newPossibleArr, k-1, newUsedArr, newCurrentWord);
      }
    }
  }
  try{
    permutationImplementation(array, k, [], currentWord);
    return 0;
  } catch(error){
    return error.message.split(",").length;
  }
}