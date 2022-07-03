function solution(k, dungeons) {
  const maxLengthArr = []
  for( let i = 1 ; i <= dungeons.length; i++ ){
    const dungeonPermutations = permutation(dungeons, i)
    let maxLength = Number.MIN_SAFE_INTEGER
    dungeonPermutations.forEach( (dungeonPermutation) => {
      if (canDo(dungeonPermutation, k)) {
        maxLength = Math.max(maxLength, dungeonPermutation.length)
      }
    } )
    maxLengthArr.push(maxLength)
  }
  return Math.max.apply(null, maxLengthArr)
}

function canDo(dungeonPermutation, k) {
  let fatigue = k
  for( let i = 0; i < dungeonPermutation.length; i++ ) {
    const dungeon = dungeonPermutation[i]
    if(fatigue >= dungeon[0]) fatigue -= dungeon[1]
    else return false
  }
  return fatigue >= 0
}

function permutation(arr, r) {
  const result = []
  
  if ( r === 1 || arr.length === 1 ) {
      for ( let i = 0; i < arr.length; i++) {
        result.push([arr[i]])
      }
      return result
  }
  
  for( let i = 0; i < arr.length; i++ ) {
      const newArr = JSON.parse(JSON.stringify(arr)) //arr를 딥카피한다.
      newArr.splice(i, 1)
      const permutationUptoNow = permutation(newArr, r-1)
      for (let j = 0; j < permutationUptoNow.length; j++) {
        permutationUptoNow[j].unshift(arr[i])
      }
      for (let i = 0; i < permutationUptoNow.length; i++) {
        result.push(permutationUptoNow[i])
      }
  }
  return result
}