function solution(N, road, K) {
  
  const dist = initDist(N, road);
  
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  let answer = 0;
  let test = [];
  for (let i = 1; i <= N; i++) {
    const distance = dist[1][i];
    if (distance <= K) {
      answer++;
      test.push(i);
    }
  }
  console.log(test);
  return answer;
}

function initDist(N, road) {
  let dist = [];
  for (let i = 0; i <= N; i++) {
    dist.push([]);
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      dist[i][j] = Number.POSITIVE_INFINITY;
    }
  }

  for (let i = 1; i <= N; i++) {
    dist[i][i] = 0;
  }

  road.forEach((innerArray) => {
    const firstNode = innerArray[0];
    const secondNode = innerArray[1];
    const distance = innerArray[2];
    if( distance <= dist[firstNode][secondNode] ){
      dist[firstNode][secondNode] = distance;
      dist[secondNode][firstNode] = distance;
    }
  });

  return dist;
}