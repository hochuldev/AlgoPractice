
function Node( data ){
    this.data = data;
    this.next = undefined;
}

function CircularLinkedList() {
    this.head = undefined;
    this.length = 0;
}

CircularLinkedList.prototype.size = function () {
    return this.length;
}

CircularLinkedList.prototype.isEmpty = function () {
    return this.length <= 0;
}

CircularLinkedList.prototype.indexOf = function (data) {
    return this.indexOfImplementation( data, this.head, 0 );
}

CircularLinkedList.prototype.indexOfImplementation = function ( data, currentNode, currentIndex ) { // returns -1 if the data is not found. if the data is found, returns the index of the node that holds the data.
    const isDataValid = data != undefined ;
    
    if ( !isDataValid ){
        throw new Error("Data cannot be undefined.");
        return;
    } // exit if the data is invalid.
    
    if ( this.isEmpty() ) return -1; // when the linked list is empty, nothing can be found. Thus, returning -1.
    
    const nextNode = currentNode.next;
    const isCurrentNodeTail = nextNode == this.head;
    const isFoundInCurrentNode = currentNode.data == data;
    
    if( isFoundInCurrentNode ) return currentIndex; // base case. The currentNode holds the data that one is looking for. Thus, the method returns the index of the current node.

    if( !isCurrentNodeTail ){ // recursive case.
        const returnedIndex = this.indexOfImplementation( data, nextNode, currentIndex+1 ); 
        if( returnedIndex >= 0 ) return returnedIndex; // The returned index is greater than or equal to 0 if some descendant of the current node holds the data.
        return -1; // The current node and its "descendants" do not hold the data. Thus returning -1.
    }
    
    if( isCurrentNodeTail ) return -1; // second base case. The method has searched the entire linked list and could not find the data.
}

CircularLinkedList.prototype.append = function( data ) {
    let currentNode = this.head;
    let newNode = new Node(data);
    this.appendImplementation( currentNode, newNode );
    this.length++;
}

CircularLinkedList.prototype.appendImplementation = function( currentNode, newNode ){
    
    if( this.isEmpty() ){ // 특이한 input에 대응하는 케이스. recursive/base case가 아님.
        this.head = newNode;
        this.head.next = this.head;
        return;
    }
    const nextNode = currentNode.next;
    const isCurrentNodeTail = nextNode == this.head;
    if( !isCurrentNodeTail ){ // recursive case
        this.appendImplementation(nextNode, newNode);
    }else {
        currentNode.next = newNode; // base case: 다음 노드가 없는 상태.
        newNode.next = this.head;
     } 
}

CircularLinkedList.prototype.print = function () {
    this.printImplementation(this.head);
}

CircularLinkedList.prototype.printImplementation = function ( currentNode ) {
    
    if( this.isEmpty() ){
        console.log("There is no data in this linked list.");
        return;
    }

    console.log(currentNode.data);
    const nextNode = currentNode.next;
    const isCurrentNodeTail = nextNode == this.head;

    if( !isCurrentNodeTail ) {
        this.printImplementation(nextNode);
    }
}




const myCircularLinkedList = new CircularLinkedList();
myCircularLinkedList.append(12);
myCircularLinkedList.append(0);
myCircularLinkedList.append(15);
myCircularLinkedList.append(24);
myCircularLinkedList.append(3336);

console.log( myCircularLinkedList.head.next.next.next.next.next );

console.log(myCircularLinkedList.indexOf( 0 ));
console.log(myCircularLinkedList.indexOf( 15 ));
console.log(myCircularLinkedList.indexOf( 24 ));
console.log(myCircularLinkedList.indexOf( 3336 ));
console.log(myCircularLinkedList.indexOf( 234 ));
console.log(myCircularLinkedList.indexOf( 12 ));
console.log(myCircularLinkedList.indexOf( 14 ));
console.log(myCircularLinkedList.indexOf(254));
console.log(myCircularLinkedList.indexOf(3));
console.log(myCircularLinkedList.indexOf(0));
const myCircularLinkedList2 = new CircularLinkedList();
console.log( myCircularLinkedList2.indexOf(34) );