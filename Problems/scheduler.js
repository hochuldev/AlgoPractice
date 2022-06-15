function solution(A) {
  return Math.floor(solutionImplementation(A, 0) / A.length);
}

function solutionImplementation(A, currentTime) {
  if (A.length === 1) {
    // base case
    let requestTime = A[0][0];
    let newCurrentTime =
      requestTime > currentTime ? requestTime + A[0][1] : A[0][1] + currentTime; // A에 있는 작업을 수행한 후의 현재 시각.
    return newCurrentTime - requestTime;
  }
  // 밑에가 recursive case
  let comparisonArray = [];
  for (let i = 0; i < A.length; i++) {
    let newA = A.map((value) => value);
    let requestTime = A[i][0];
    let timeTaken = // A의 i번째에 있는 작업을 수행하는데 걸린 시간 + 만약 현재 시각이 작업을 요청한 시각보다 빠르다면, 작업을 수행하기 전에 요청 시각까지 기다리는 시간.
      requestTime > currentTime
        ? requestTime - currentTime + newA[i][1]
        : newA[i][1];
    let newCurrentTime = currentTime + timeTaken; // A의 i번째에 있는 작업을 수행한 뒤의 현재 시각.
    let totalTime = newCurrentTime - requestTime; // i번째 작업을 요청한 시점부터 i번째 작업을 완료하기까지 걸린 시간.
    newA.splice(i, 1); // 현재 i번째 작업을 수행했기 때문에, 남은 작업이 담겨있어야 할 array에서 i번째 작업을 제외시킴.
    comparisonArray.push(
      solutionImplementation(newA, newCurrentTime) + totalTime // 이 재귀 함수를 호출할 때, 다음 두가지를 가정한다. 1. i번째 작업이 완료됐음. 2. 나머지 작업을 최적의 순서로 실행했을 때, 이 재귀 함수는 각 작업의 대기시간+ 소요시간을 다 합친 값을 반환함.
    );
  }
  comparisonArray.sort((a, b) => a - b);
  return comparisonArray.shift();
}
