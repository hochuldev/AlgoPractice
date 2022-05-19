
function LinkedList(){
    this.length = 0;
    this.head = undefined;
}

function Node( data ){
    this.data = data;
    this.next = undefined;
}

LinkedList.prototype.isEmpty = function() {
    return this.head == undefined || undefined ? true : false;
}

LinkedList.prototype.indexOf = function (data) {
    return this.indexOfImplementation( data, this.head, 0 );
}

LinkedList.prototype.indexOfImplementation = function ( data, currentNode, currentIndex ) { // returns -1 if the data is not found. if the data is found, returns the index of the node that holds the data.
    const isDataValid = data != undefined ;
    
    if ( !isDataValid ){
        throw new Error("Data cannot be undefined or undefined.");
        return;
    } // exit if the data is invalid.
    
    if ( this.isEmpty() ) return -1; // when the linked list is empty, nothing can be found. Thus, returning -1.
    
    const nextNode = currentNode.next;
    const isTraversable = nextNode != undefined;
    const isFoundInCurrentNode = currentNode.data == data;
    
    if( isFoundInCurrentNode ) return currentIndex; // base case. The currentNode holds the data that one is looking for. Thus, returning the index of the current node.

    if( isTraversable ){ // recursive case.
        let returnedIndex = this.indexOfImplementation( data, nextNode, currentIndex+1 ); 
        if( returnedIndex >= 0 ) return returnedIndex; // The returned index is greater than or equal to 0 if some descendant of the current node holds the data.
        return -1; // The current node and its "descendants" do not hold the data. Thus returning -1.
    }
    
    if( !isTraversable ) return -1; // second base case. The method has searched the entire linked list and could not find the data.
}

LinkedList.prototype.print = function () {
    this.printImplementation(this.head);
}

LinkedList.prototype.printImplementation = function ( currentNode ) {
    
    if( this.isEmpty() ){
        console.log("There is no data in this linked list.");
        return;
    }

    console.log(currentNode.data);
    let nextNode = currentNode.next;

    if(nextNode != undefined) {
        this.printImplementation(nextNode);
    }
}

LinkedList.prototype.append = function( data ) {
    let currentNode = this.head;
    let newNode = new Node(data);
    this.appendImplementation( currentNode, newNode );
    this.length++;
}

LinkedList.prototype.appendImplementation = function( currentNode, newNode ){
    
    if( currentNode == undefined ){ // 특이한 input에 대응하는 케이스. recursive/base case가 아님.
        this.head = newNode;
        return;
    }
    let nextNode = currentNode.next;
    if( nextNode != undefined ){ // recursive case
        this.appendImplementation(nextNode, newNode);
    }else currentNode.next = newNode; // base case: LinkedList에 head node밖에 없는 상태.
}

LinkedList.prototype.insert = function ( index, data ) {
    
    const isIndexAndDataValid = (data != undefined && index >= 0 && typeof index == "number") ;
    if ( !isIndexAndDataValid ){
        throw new Error("index can only be a number greater than 0. Also, data cannot be undefined or undefined.");
        return;
    } // exit if the index or data is invalid.
    
    if ( this.isEmpty() ) {
        this.insertWhenEmpty(data); // when the linked list is empty, just set the new node as the head node.
        return;
    }
    if ( index == 0 ) {
        this.insertWhenIndexIsZero(data);
        return;
    }
    this.insertInOtherCases( index, data );
}

LinkedList.prototype.insertWhenEmpty = function( data ) {
    this.head = new Node(data);
    console.log("There was no head node in the linked list. Thus, we have inserted the node as the head node into the linked list.")
    this.length++;
}

LinkedList.prototype.insertWhenIndexIsZero = function( data ) {
    let newNode = new Node(data);
    const tempNode = this.head;
    this.head = newNode;
    this.head.next = tempNode;
    this.length++;
    return;
}

LinkedList.prototype.insertInOtherCases = function( index, data ) {
    let currentNode = this.head;
    let previousNode;
    const newNode = new Node(data);
    index = index < this.length ? index : this.length; // to avoid the situation that access some node's undefined property.
                                                           // if the index is greater than or equal to the length, then we just insert the new node at the end of the linked list.
    for ( let i = 0; i < index; i++ ) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
}

LinkedList.prototype.remove = function () {
    if( this.head == undefined ){
        console.log("There is no head node.");
        return;
    }
    this.head = this.head.next;
    this.length--;
}

LinkedList.prototype.removeFrom = function ( index ) {
    let currentNode = this.head;
    let previousNode = currentNode;

    if( previousNode == undefined ) {
        console.log("There is no data at the index. Thus the function is terminated without deleting an element");
        return;
    }

    for( let i = 0; i < index; i++ ) {
        if ( currentNode.next == undefined ) {
            console.log(`There is no data at the index.`);
            return;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
    
    this.length--;
}


/*
const myLinkedList = new LinkedList();
myLinkedList.append(0);
myLinkedList.append(15);
myLinkedList.append(24);
myLinkedList.append(3336);

const myLinkedList5 = new LinkedList();


console.log(myLinkedList.indexOf( 0 ));
console.log(myLinkedList.indexOf( 15 ));
console.log(myLinkedList.indexOf( 24 ));
console.log(myLinkedList.indexOf( 3336 ));
console.log(myLinkedList.indexOf( 234 ));
console.log(myLinkedList.indexOf( 12 ));
console.log(myLinkedList.indexOf( 14 ));
console.log(myLinkedList5.indexOf(254));
console.log(myLinkedList5.indexOf(3));
console.log(myLinkedList5.indexOf(0));

let myLinkedList1 = new LinkedList();
myLinkedList1.append("this is my new node");

myLinkedList1.print();

let myLinkedList2 = new LinkedList();
myLinkedList2.append("blah");
myLinkedList2.append("yay");

myLinkedList2.insert(1, "insert test");

myLinkedList2.print();


myLinkedList2.removeFrom(1);

myLinkedList2.print();

let myLinkedList3 = new LinkedList();
myLinkedList3.append("The head node");
console.log("First insertion");
myLinkedList3.insert(5, "1");
myLinkedList3.print();
console.log("Second insertion");
myLinkedList3.insert(5, "2");
myLinkedList3.print();
console.log("Third insertion");
myLinkedList3.insert(2, "3");
myLinkedList3.print();
console.log("Fourth insertion");
myLinkedList3.insert(1, "4");
myLinkedList3.print();
console.log("Fifth insertion");
myLinkedList3.insert(3, "5");
myLinkedList3.print(); 
myLinkedList3.insert(4, "insert without head node.");
myLinkedList3.print();

let myLinkedList4 = new LinkedList();
myLinkedList4.append(1);
myLinkedList4.append(2);
myLinkedList4.append(3);
myLinkedList4.append(4);

myLinkedList4.insert(0, "First element");
myLinkedList4.insert(1, " Second Element");
myLinkedList4.insert(2, "Third element");
myLinkedList4.insert(3, "Fourth element");
myLinkedList4.insert(4, "Fifth element");
myLinkedList4.insert(10, "last element");
myLinkedList4.insert("34", "blahbalh");

myLinkedList4.print();
*/