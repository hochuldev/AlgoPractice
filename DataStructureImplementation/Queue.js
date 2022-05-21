

function Queue( array ) {
    this.array = array ? array : [];
    this.head = 0;
}

Queue.prototype.enqueue = function( data ) {
    this.array.push(data);
}

Queue.prototype.dequeue = function() {
    let dataToDequeue = this.array[ this.head ];
    if( dataToDequeue == undefined ) return undefined
    this.head++;
    return dataToDequeue;
}

function expect( result ) {
    return {
        toBe: function( expected ) {
            console.log( deepCompareQueue(expected, result) );
        }
    }
}

function deepCompareQueue( itemToCompare1, itemToCompare2 ) {
    return JSON.stringify( itemToCompare1.array.slice( [ itemToCompare1.head ] ) ) == JSON.stringify( itemToCompare2.array.slice( [ itemToCompare2.head ] ) );

}


let queue = new Queue( [3,4,5] );
queue.enqueue(5);
expect( queue ).toBe( new Queue( [3,4,5,5] ));

queue = new Queue( [3,4,5] );
queue.enqueue(2);
expect( queue ).toBe( new Queue( [3,4,5,2] ) );

queue = new Queue( [3,2,6,14] );
queue.enqueue(24);
expect( queue ).toBe( new Queue( [3,2,6,14,24] ) );

queue.enqueue(35);
expect( queue ).toBe( new Queue( [3,2,6,14,24,35] ) );

queue = new Queue(); // To test enqueque when the queue is empty.
queue.enqueue(34);
expect(queue).toBe( new Queue( [34] ) );

queue = new Queue( [3,1,96] );
queue.dequeue();
expect(queue).toBe( new Queue([ 1, 96 ]) );

queue.enqueue(24);
expect(queue).toBe( new Queue( [1, 96, 24] ));

queue.dequeue();
expect(queue).toBe( new Queue( [96, 24] ) );