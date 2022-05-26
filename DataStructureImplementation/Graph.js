function Graph() {
    this.edges = new Map();
}

Graph.prototype.addVertex = function( key ) {
    this.edges.set( key, [] );
}

Graph.prototype.addEdge = function( vertex1, vertex2 ) {
    //adds an edge from vertex1 to vertex2

    vertex1Edges = this.edges.get(vertex1);
    vertex1Edges.push(vertex2);
}

Graph.prototype.removeVertex = function( vertex ) {
    this.edges.delete(vertex);
    for( let [key, value] of this.edges ) {
        for(let i = 0; i < value.length; i++){
            if( value[i] == vertex ) value.splice(i, 1);
        }       
    }
}

Graph.prototype.removeEdge = function( vertex1, vertex2 ) {
    edgesFromVertex1 = this.edges.get(vertex1); //array
    for( let i = 0; i < edgesFromVertex1.length; i++ ){
        if ( edgesFromVertex1[i] == vertex2 ) edgesFromVertex1.splice(i, 1);
    }
}

Graph.prototype.print = function() {
    console.log( this.edges );
}

Graph.prototype.dfsImplementation = function( currentVertex, visitedVertices, action ) {
    let hasVisited = visitedVertices.has( currentVertex ); 

    if( hasVisited ) return // base case1: 이미 visit한 노드를 다시 방문할 경우, 그대로 backtrack해준다.
    visitedVertices.set(currentVertex, 1);
    action(currentVertex); // 이 라인은, base case1이 아니라면, base case와 recursive case 구분없이 실행해야 하는 라인이다. 그래서, 여기에 삽입함.

    if( this.edges.get(currentVertex).length > 0 ){

        for( let vertex of this.edges.get(currentVertex) ) { // recursive case: 아직 traverse할 노드가 있을 때.
                this.dfsImplementation( vertex, visitedVertices, action );
        }
    }
    
}

Graph.prototype.dfs = function( initialVertex, action ) {
    let visitedVertices = new Map();
    this.dfsImplementation( initialVertex, visitedVertices, action );
}

Graph.prototype.bfs = function( initialVertex, action ) {
    const queue = [ initialVertex ];
    const visitedVertices = new Map();

    while( queue.length > 0 ) {
        let currentVertex = queue.shift();
        visitedVertices.set( currentVertex, 1 );
        action( currentVertex );
        let elementsToAdd = this.edges.get( currentVertex );

        elementsToAdd.forEach( ( value ) => {
            if( visitedVertices.get(value) != 1 ) {
                queue.push(value);
            }
        } );
           
    }
}

myGraph = new Graph();

myGraph.addVertex("a");
myGraph.addVertex("c");
myGraph.addVertex("g");
myGraph.addVertex("b");
myGraph.addVertex("d");

myGraph.addEdge( "g", "c" );
myGraph.addEdge("a", "g");
myGraph.addEdge("a", "b");
myGraph.addEdge("b", "a");
myGraph.addEdge("c", "b");
myGraph.addEdge("c","d");


// myGraph.dfs( "a", (vertex) => {
//     console.log(vertex);
// } )

myGraph.bfs( "a", (vertex) => {
    console.log(vertex);
} )

myGraph.print();