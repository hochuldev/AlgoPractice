/*
배열 A에는 각 방마다 탈출하는데 걸리는 시간이 적혀있습니다.
이 방의 구조는 한번 넘어갈때마다 문이 1개씩 늘어나고 각 문 마다 탈출에 걸리는 시간은 모두 다릅니다.

예를들어 배열 A에 아래와 같이 시간 정보가 들어있다고 가정합니다.
A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]

이를 그림으로 표현하면 아래와 같습니다.

1
2 5
7 10 1
9 4 4 5

최상단에서 시작하여 이동할 때는 대각선 아래 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동이 가능하며 이동했을 때 배열에 주어진 시간만큼 대기한 후 다음 칸으로 이동할 수 있습니다.

이때 최소한의 대기 시간으로 최하단의 방을 탈출하는데 걸리는 시간을 구하는 함수를 작성하세요.

위 그림에서 최단 시간은 1->5->1->4 로 총 11이 됩니다.

[입력]
대기시간 정보가 입력된 2차원 배열 A

[출력]
최소 대기 시간
*/

/*
문제를 잘못 이해했다. 최상단에서 시작하여 이동할 때만, 대각선 아래 방향으로 이동할 수 있고, 다른 경우에는 모든 문을 사용 가능함을 알 수 있다.
이것 때문에, 4번째 테스트 케이스를 실패했던것.
다시 살펴보니, 다시 또 잘못 이해한거다. 아무리 봐도, 최상단이 아닐 때 모든 문을 사용 가능한것이 아니다. 이게 뭐지?
*/

function solution(A) {
  let hasEscaped = false;
  let currentPosition = [0, 0];
  let time = A[0][0];
  while (!hasEscaped) {
    let timeTakenLeft = calcTime(A, currentPosition, "LEFT");
    let timeTakenRight = calcTime(A, currentPosition, "RIGHT");
    if (
      timeTakenLeft === Number.POSITIVE_INFINITY &&
      timeTakenRight === Number.POSITIVE_INFINITY
    )
      break;
    if (timeTakenLeft < timeTakenRight) {
      time += timeTakenLeft;
      currentPosition[0] = currentPosition[0] + 1;
      currentPosition[1] = currentPosition[1] - 1;
    } else {
      time += timeTakenRight;
      currentPosition[0] = currentPosition[0] + 1;
      currentPosition[1] = currentPosition[1] + 1;
    }
  }
  return time;
}

function calcTime(A, currentPosition, direction) {
  // currentPosition은 row, column 위치가 담긴 배열
  let row = currentPosition[0];
  let column = currentPosition[1];
  row++;
  if (direction === "LEFT") {
    column--;
    if (column < 0 || A[row] === undefined) return Number.POSITIVE_INFINITY;
    let newRoom = A[row][column];
    return newRoom;
  }
  if (direction === "RIGHT") {
    column++;
    if (A[row] === undefined) return Number.POSITIVE_INFINITY;
    let newRoom = A[row][column];
    return newRoom;
  }
}

let A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]];
console.log(solution(A));

A = [[1]];
console.log(solution(A));

A = [[1], [2, 1], [1, 10, 1], [9, 1, 1, 5], [1, 5, 0, 3, 5]];
console.log(solution(A));

A = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
console.log(solution(A));

A = [[10], [8, 9], [7, 6, 5], [4, 3, 2, 1]];
console.log(solution(A));
