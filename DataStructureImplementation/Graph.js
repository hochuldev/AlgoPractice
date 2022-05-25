
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

myGraph = new Graph();

myGraph.addVertex("a");
myGraph.addVertex("c");
myGraph.addVertex("g");
myGraph.addVertex("b");

myGraph.addEdge("a", "g");
myGraph.addEdge("a", "b");
myGraph.addEdge("b", "a");
myGraph.addEdge("c", "b");
myGraph.addEdge("c","d");
myGraph.removeEdge("c","b");


myGraph.removeVertex("a");
myGraph.print();