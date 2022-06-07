function solution(numbers) {
  let permutationMap = new Map();
  let count = 0;
  function permutation(numbers, currentNumber, nextNumbers) {
    permutationMap.set(currentNumber, 1);
    let depth = currentNumber.length;
    if (depth < numbers.length) {
      for (let i = 0; i < nextNumbers.length; i++) {
        let newCurrentNumber = currentNumber;
        let newNextNumbers = nextNumbers;
        newCurrentNumber = newCurrentNumber.concat("", nextNumbers[i]);
        let tempNextNumbers = newNextNumbers.slice(0, i);
        tempNextNumbers = tempNextNumbers.concat(
          "",
          newNextNumbers.slice(i + 1)
        );
        newNextNumbers = tempNextNumbers;
        permutation(numbers, newCurrentNumber, newNextNumbers);
      }
    }
  }
  permutation(numbers, "", numbers);
  tempArr = [];
  for (let [key, value] of permutationMap) {
    if (key[0] != 0) tempArr.push(key);
  }

  tempArr.forEach((value) => {
    if (isPrime(value)) count++;
  });

  return count;
}

function isPrime(number) {
  let doMore = true;
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}