

function MinHeap() {
    this.array = [];
}

MinHeap.prototype.swap = function( index1, index2 ) {
    const tempData = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = tempData;
}

MinHeap.prototype.parentIndex = function( currentIndex ) {
    return Math.floor( ( currentIndex - 1 ) / 2 );
}

MinHeap.prototype.leftChildIndex = function( currentIndex ) {
    return 2 * currentIndex + 1;
}

MinHeap.prototype.rightChildIndex = function( currentIndex ) {
    return this.leftChildIndex( currentIndex ) + 1;
}

MinHeap.prototype.insert = function( data ) {
    this.array.push( data );
    this.insertImplementation( data, this.array.length-1 );
}

MinHeap.prototype.insertImplementation = function( data, currentIndex ) {
    const parentIndex = this.parentIndex( currentIndex );
    const parentData = this.array[ parentIndex ];
    

    if( parentData > data ) { //recursive case: needs to bubble up further. 
        this.array[ parentIndex ] = data;
        this.array[ currentIndex ] = parentData;
        currentIndex = parentIndex;
        this.insertImplementation( data, currentIndex );
    }

    //base case need not be considered since there isn't anything to be done.
}

MinHeap.prototype.extractMin = function() {
    if( this.array.length <= 0 ) return undefined;
    const Min = this.array[0];
    this.swap( 0, this.array.length - 1 );
    this.array.pop();
    
    let currentIndex = 0;
    isLeftChildEmpty = this.leftChildIndex( currentIndex ) === undefined;
    isRightChildEmpty = this.rightChildIndex( currentIndex ) === undefined;
    
    while( ( !isLeftChildEmpty || !isRightChildEmpty ) && this.array[ this.minimumChildIndex( currentIndex ) ] < Min ) {
        this.swap( currentIndex, this.minimumChildIndex( currentIndex ) );
        isLeftChildEmpty = this.leftChildIndex( currentIndex ) === undefined;
        isRightChildEmpty = this.rightChildIndex( currentIndex ) === undefined;
        currentIndex = this.minimumChildIndex( currentIndex );
    }


    return Min;

}

MinHeap.prototype.minimumChildIndex = function( currentIndex ) {
    const leftChildData = this.array[ this.leftChildIndex( currentIndex ) ];
    const rightChildData = this.array[ this.rightChildIndex( currentIndex ) ];

    if( leftChildData <= rightChildData || typeof rightChildData == "undefined" ) return this.leftChildIndex( currentIndex );
    else return this.rightChildIndex( currentIndex );

}

MinHeap.prototype.print = function () {
    console.log( this.array );
}

let myHeap = new MinHeap();

myHeap.insert(3);
myHeap.insert(1);
myHeap.insert(245);
myHeap.insert(2);


console.log( myHeap.extractMin() );
myHeap.print();
console.log( myHeap.extractMin() );
myHeap.print();
console.log( myHeap.extractMin() );
myHeap.print();
console.log( myHeap.extractMin() );
myHeap.print();
console.log( myHeap.extractMin() );
myHeap.print();
