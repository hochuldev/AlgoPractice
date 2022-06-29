function solution(n, computers){
  let visited = [];
  let counter = 0;
  computers.forEach( (v, node) => {
    if(visited[node] === true) return;
    DFS(node,computers).forEach( (hasVisited, node) => {
      if(hasVisited === true) visited[node] = true;
    } );
    counter++;
  } );
  return counter;
}

function DFS(initNode, edges){

  let visited = [];
  function DFSImplementation(node, edges){
    let currentEdges = edges[node];
    if( visited[node] === true) return; //base case 1
    visited[node] = true;
    if( currentEdges === undefined ) return; //base case 2 현재 노드가 edge를 갖지 않을 때.
    
    //recursive case
    for( let i = 0; i < currentEdges.length; i++ ){
      if(currentEdges[i] === 1 ) DFSImplementation(i, edges);
    }
  }
  DFSImplementation(initNode, edges);
  return visited;
}

// console.log( DFS(3, [[1, 1, 1, 0, 0], [1, 1, 0, 0, 0], [1, 0, 1, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]) );

solution(5, [[1, 1, 1, 0, 0], [1, 1, 0, 0, 0], [1, 0, 1, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]] );