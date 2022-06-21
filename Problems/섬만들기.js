function solution(n, costs) {
  let connected = new Map();
  connected.set(0, 1);
  let answer = 0;
  while (connected.size < n) {
    let candidates = [];
    for (let i = 0; i < costs.length; i++) {
      let cost = costs[i];
      if (
        connected.get(cost[0]) === 1 &&
        connected.get(cost[1]) === undefined
      ) {
        let unconnectedIsland = cost[1];
        candidates.push([unconnectedIsland, cost[2]]);
      } else if (
        connected.get(cost[0]) === undefined &&
        connected.get(cost[1]) === 1
      ) {
        let unconnectedIsland = cost[0];
        candidates.push([unconnectedIsland, cost[2]]);
      }
    }
    let minCost = Number.POSITIVE_INFINITY;
    let minIsland;
    candidates.forEach( (arr) => {
      if( arr[1] < minCost ) {
        minCost = arr[1];
        minIsland = arr[0];
      }
    } );
    answer += minCost;
    connected.set(minIsland, 1);
  }
  return answer;
}