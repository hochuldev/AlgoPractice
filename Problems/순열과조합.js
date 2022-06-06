function permutationImplementation(arr, currentArr, remainingArr, r) {
  let depth = currentArr.length;
  console.log(currentArr);

  if (depth < r && remainingArr.length > 0) {
    for (let i = 0; i < remainingArr.length; i++) {
      let newCurrentArr = currentArr.map((value) => value); //기존의 array를 deep copy한 뒤, 복사본을 mutate한다.
      let newRemainingArr = remainingArr.map((value) => value);
      newRemainingArr.splice(newRemainingArr.indexOf(remainingArr[i]), 1);
      newCurrentArr.push(remainingArr[i]);

      permutationImplementation(arr, newCurrentArr, newRemainingArr, r);
    }
  }
}

function permutation(arr, r) {
  permutationImplementation(arr, [], arr, r);
}
