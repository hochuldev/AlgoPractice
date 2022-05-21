

function PriorityQueue() {
    this.array = [];    
}

PriorityQueue.prototype.isEmpty = function() {
    if( this.array.length <= 0 ) return true;
    return false;
}

PriorityQueue.prototype.enqueue = function( data ) {
    if( this.isEmpty() || data >= this.array[this.array.length-1] ) {
        this.array.push( data );
        return;
    }
    for( let i = 0; i < this.array.length; i++ ){
        let value = this.array[i];
        if ( data <= value ) {
            this.array.splice( i, 0, data );
            return;
        }
    }
}

PriorityQueue.prototype.dequeue = function() {
    this.array.pop();
}

function expect( result ) {
    return {
        toBe: function( expected ) {
            console.log( deepCompareQueue(expected, result) );
        }
    }
}

function deepCompareQueue( queue1, queue2 ) {
    return  JSON.stringify( queue1.array ) == JSON.stringify( queue2.array );
}

myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(2);
myPriorityQueue.enqueue(24);
myPriorityQueue.enqueue(13);

expect(myPriorityQueue).toBe({array: [2,13,24]});

myPriorityQueue.enqueue(1);
expect(myPriorityQueue).toBe( {array: [1,2,13,24]} );

myPriorityQueue.dequeue();
expect(myPriorityQueue).toBe({array: [1,2,13]});
myPriorityQueue.dequeue();
expect(myPriorityQueue).toBe({array: [1,2]});
myPriorityQueue.dequeue();
expect(myPriorityQueue).toBe({array:[1]});
myPriorityQueue.dequeue();
expect(myPriorityQueue).toBe({array:[]});
myPriorityQueue.dequeue();
expect(myPriorityQueue).toBe({array:[]});
