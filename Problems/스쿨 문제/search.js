function traverse(grid, i, j, visitedNodes) {
  visitedNodes.set(`[${i},${j}]`, 1);
  let canGoUp = i - 1 >= 0 && visitedNodes.get(`[${i - 1},${j}]`) === undefined && grid[i-1][j] === "1";
  let canGoRight =
    j + 1 < grid[i].length && visitedNodes.get(`[${i},${j + 1}]`) === undefined && grid[i][j+1] === "1";
  let canGoDown =
    i + 1 < grid.length && visitedNodes.get(`[${i + 1},${j}]`) === undefined && grid[i+1][j] === "1";
  let canGoLeft =
    j - 1 >= 0 && visitedNodes.get(`[${i},${j - 1}]`) === undefined && grid[i][j-1] === "1";
  if (canGoUp) traverse(grid, i - 1, j, visitedNodes);
  if (canGoRight) traverse(grid, i, j + 1, visitedNodes);
  if (canGoDown) traverse(grid, i + 1, j, visitedNodes);
  if (canGoLeft) traverse(grid, i, j - 1, visitedNodes);
}
let map = new Map();
traverse(
  [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]],
  0,
  0,
  map
);

console.log(map);
