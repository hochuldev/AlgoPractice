
function Node( data ){
    this.data = data;
    this.next = undefined;
}

function CircularLinkedList() {
    this.head = new Node();
    this.length = 1;
}

CircularLinkedList.prototype.size = function () {
    return this.length;
}

CircularLinkedList.prototype.isEmpty = function () {
    return this.length <= 0;
}

CircularLinkedList.prototype.append = function ( data ) {

}

CircularLinkedList.prototype.traverseTo = function ( index ) {
    if( this.isEmpty() ) {
        throw error(`Could not traverse`)
    }
}

CircularLinkedList( 3 );