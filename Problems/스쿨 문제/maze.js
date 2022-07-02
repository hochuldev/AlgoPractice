

let visited = [];
let resultArr = [];

function DFS(edges, node, destination){
  if( node === destination ) return true;

  if( visited[node] === true ) return;

  if( edges.get(node) === undefined ) return false;

  visited[node] = true;

  edges.get(node).forEach( (nextNode) => {
      let result = DFS(nextNode);
      if( result === true ) {
          resultArr.push(result);
          return true;
      }
  } );

}

function makeGraph(maps){
  const edges = new Map();
  maps.forEach( (road) => {
      if( edges.get(road[0]) === undefined ) edges.set(road[0], [road[1]]);
      else{
          if(typeof edges.get(road[0]) !== 'object' ) throw new Error("A value of the edges be an array");
          edges.get(road[0]).push(road[1]);
      }
  } );
  return edges;
}

function reset(){
  visited = [];
  resultArr = [];
}

function solution(N, M, S, maps) {
  reset(visited,resultArr);
  const edges = makeGraph(maps);
  for( let i = 1; i < N+1; i++ ){
    DFS(edges, S, i);
    if( resultArr.length >= 2 ) return 'YES';
    reset(visited,resultArr);
  }
  return 'No';
}