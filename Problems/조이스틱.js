function solution(name) {
  let hasFinished = false;
  let currentIndex = 0;
  let counter = 0;
  let possibleIndices = [];
  for(let i = 1; i < name.length; i++){
    possibleIndices.push(i);
  }
  while( !hasFinished ){
    counter += matchCharacter(name, currentIndex);
    possibleIndices = updatePossibleIndices( name, possibleIndices );
    if( possibleIndices.length !== 0){
      let minAndIndices = moveToNextChar(name, currentIndex, possibleIndices);
      let min = minAndIndices.min;
      possibleIndices = minAndIndices.possibleIndices;
      currentIndex = minAndIndices.currentIndex;
      counter += min;
    }else hasFinished = true;
  }
  return counter;
}

function updatePossibleIndices( name, possibleIndices ){
  let tempIndices = [];
  possibleIndices.forEach( (targetIndex) => {
    if( name[targetIndex] !== "A" && targetIndex !== 0 ) tempIndices.push(targetIndex);
  } );
  return tempIndices;
}

function moveToNextChar(name, currentIndex, possibleIndices) {
  const distances = new Map();
  possibleIndices.forEach((targetIndex) => {
    let distance = 0;
    let tempIndex = currentIndex;

    while (tempIndex !== targetIndex) {
      //오른쪽으로 움직이며 최소 거리를 계산하는 코드.
      distance++;
      tempIndex++;
      tempIndex = tempIndex % name.length;
    }
    distances.set(targetIndex, distance); // 오른쪽으로 쭉 움직였을 때, targetIndex에 도달하기 까지의 시간.
    distance = 0;
    tempIndex = currentIndex;
    while (tempIndex !== targetIndex) {
      //왼쪽으로 움직이며 최소 거리를 계산하는 코드.
      distance++;
      tempIndex--;
      if (tempIndex < 0) tempIndex = name.length + tempIndex;
    }

    if (distances.get(targetIndex) > distance) {
      distances.set(targetIndex, distance);
    }
  });
  distances.delete(currentIndex);

  let min = ["", Number.POSITIVE_INFINITY];
  distances.forEach((distance, key) => {
    min[1] = min[1] < distance ? min[1] : distance;
    min[0] = min[1] < distance ? min[0] : key;
  });
  if(min[0] === "" || min[1] === Number.POSITIVE_INFINITY){
    min[1]=0;
  }
  possibleIndices.splice( possibleIndices.indexOf(min[0]) , 1);
  return { min: min[1], possibleIndices: possibleIndices, currentIndex: min[0] };
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
console.log(solution("BDFADHA"));