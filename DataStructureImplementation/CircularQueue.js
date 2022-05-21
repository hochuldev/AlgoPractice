
function CircularQueue( size ) {
    this.head = -1;
    this.size = size;
    this.array = [];
}

CircularQueue.prototype.isEmpty = function() {
    if( this.array.length <= 0 ) return true;
    return false;
}

CircularQueue.prototype.enqueue = function( data ) {
    if( this.array.length < this.size ){
        this.array.push( data );
    }
}

CircularQueue.prototype.dequeue = function() {
    this.head = ( this.head+1 ) % (this.array.length || this.size); // this.array.length = 0일 때, 0 % 0 = NAN이기에 오류가 생길 수 있음. 그래서, 해당 경우 this.size로 나누어서 나머지를 구함.
    return this.array[this.head];
}


// let myCircularQueue = new CircularQueue(3); // when the circular queue is full
// myCircularQueue.enqueue(2);
// myCircularQueue.enqueue(3);
// myCircularQueue.enqueue(4);
// myCircularQueue.enqueue(5);
// for( let i = 0; i < 8; i++ ){
//     console.log( myCircularQueue.dequeue() ); 
// }

// let myCircularQueue2 = new CircularQueue(3); // when the circular queue is not full.
// myCircularQueue2.enqueue(2);
// myCircularQueue2.enqueue(3);
// for( let i = 0; i < 8; i++ ){
//     console.log( myCircularQueue2.dequeue() ); 
// }

// let myCircularQueue3 = new CircularQueue(3); // when the circular queue is empty.
// for( let i = 0; i < 5; i++ ){
//     console.log( myCircularQueue3.dequeue() ); 
// }

// myCircularQueue3.enqueue(24);
// console.log( myCircularQueue3.array );
// for( let i = 0; i < 5; i++ ){
//     console.log( myCircularQueue3.dequeue() ); 
// }
