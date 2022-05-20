

function Stack( array ) {
    this.array = array ? array : [];
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
}

Stack.prototype.push = function ( data ) {
    this.array.push(data);
}

const myStack = new Stack( [3,4,5] );

console.log( myStack.getBuffer() );
console.log( myStack.array );