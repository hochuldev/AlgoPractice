// 프로그래머스 문제: 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  time = 0;
  let onBridge = [];

  while (truck_weights.length > 0 || onBridge.length > 0) {
    let onBridgeWeight = 0;
    onBridge.forEach((array) => (onBridgeWeight += array[0]));

    let isTruckAddable =
      onBridge.length < bridge_length &&
      weight >= onBridgeWeight + truck_weights[0] &&
      truck_weights.length > 0;
    if (isTruckAddable) {
      onBridge.push([truck_weights.shift(), bridge_length]);
    }

    onBridge = onBridge.map((array) => {
      array[1] = array[1] - 1;
      return array;
    });

    if (onBridge[0][1] <= 0) {
      onBridge.shift();
    }

    time++;
  }

  return ++time;
}
