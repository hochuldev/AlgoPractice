function solutionImplementation(name, currentIndex, possibleIndices) {
  let leftCounter, rightCounter;
  if (possibleIndices.length > 0) {
    // recursive case
    let currentCounter = matchCharacter(name, currentIndex);
    let nextIndexAndDistance = calcNextIndex(
      name,
      currentIndex,
      possibleIndices,
      "LEFT"
    );
    let nextIndex = nextIndexAndDistance[0];
    let moveCounter = Math.abs(
      typeof nextIndex === "number" ? nextIndexAndDistance[1] : 0
    );
    let nextPossibleIndices = possibleIndices.filter(
      (value) => value !== currentIndex
    );
    leftCounter =
      solutionImplementation(name, nextIndex, nextPossibleIndices) +
      moveCounter;
    nextIndexAndDistance = calcNextIndex(
      name,
      currentIndex,
      possibleIndices,
      "RIGHT"
    );
    nextIndex = nextIndexAndDistance[0];
    moveCounter = Math.abs(
      typeof nextIndex === "number" ? nextIndexAndDistance[1] : 0
    );
    rightCounter =
      solutionImplementation(name, nextIndex, nextPossibleIndices) +
      moveCounter;
    console.log(
      `possibleIndices: ${possibleIndices}, nextPossibleIndices: ${nextPossibleIndices}, leftCounter: ${leftCounter}, rightCounter: ${rightCounter}, moveCounter: ${moveCounter}, currentCounter: ${currentCounter}`
    );

    
  }
  //아래는 base case
  return Math.min(leftCounter, rightCounter) + currentCounter;
}

function solution(name) {
  let possibleIndices = [];
  for (let i = 0; i < name.length; i++) {
    possibleIndices.push(i);
  }
  possibleIndices = createPossibleIndices(name, possibleIndices);
  return solutionImplementation(name, 0, possibleIndices);
}

function calcNextIndex(name, currentIndex, possibleIndices, direction) {
  // const distances = new Map();
  let distance = 0;
  let tempIndex = currentIndex;
  possibleIndices.forEach((targetIndex) => {
    if (direction === "RIGHT") {
      while (tempIndex !== targetIndex) {
        //오른쪽으로 움직이며 최소 거리를 계산하는 코드.
        distance++;
        tempIndex++;
        tempIndex = tempIndex % name.length;
      }
    } else if (direction === "LEFT") {
      while (tempIndex !== targetIndex) {
        //왼쪽으로 움직이며 최소 거리를 계산하는 코드.
        distance++;
        tempIndex--;
        if (tempIndex < 0) tempIndex = name.length + tempIndex;
      }
    }
    // distances.set(targetIndex, distance); // targetIndex에 도달하기 까지의 시간.
  });
  return [tempIndex, distance];
  // distances.delete(currentIndex);
  // let min = ["", Number.POSITIVE_INFINITY];
  // distances.forEach((distance, key) => {
  //   min[1] = min[1] < distance ? min[1] : distance;
  //   min[0] = min[1] < distance ? min[0] : key;
  // });
}

function createPossibleIndices(name, possibleIndices) {
  let tempIndices = [];
  possibleIndices.forEach((targetIndex) => {
    if (name[targetIndex] !== "A") tempIndices.push(targetIndex);
  });
  return tempIndices;
}

function matchCharacter(name, i) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let counter = 0;
  alphabetIndex = alphabets.indexOf(name[i]);
  let isMatched = false;
  let currentIndex = 0;

  if (name[i] === "A") return counter;

  if (Math.floor(alphabets.length / 2) < alphabetIndex) {
    while (!isMatched) {
      currentIndex -= 1;
      let currentAlphabet = alphabets[26 + currentIndex];
      isMatched = currentAlphabet === name[i];
      counter++;
    }
  } else {
    while (!isMatched) {
      currentIndex += 1;
      let currentAlphabet = alphabets[currentIndex];
      isMatched = currentAlphabet === name[i];
      counter++;
    }
  }
  return counter;
}
// matchCharacter("JEROEN", 1);

// console.log(solution("BG"));
// console.log(solution("BDFADHA"));
// console.log(solution("JEROEN"));
console.log(solution("CBD"));
// console.log(solution("AAAK"))

// console.log( calcNextIndex("AAAK",0,[3],"LEFT" ) );
