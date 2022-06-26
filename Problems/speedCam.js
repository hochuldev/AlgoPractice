function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let hasCompleted = true;
  let counter = 0;
  
  while (routes.length > 0) {
    let installedLocation = routes[0][1];
    routes = routes.filter( (value) => !(value[0] <= installedLocation && value[1] >= installedLocation) );
    counter++;
  }
  return counter;
}