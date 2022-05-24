

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function HashTable( size ) {
    if( typeof size !== "number" ) throw Error(`The size must be a number.`);

    this.size = size;
    this.array = new Array(size);
}

HashTable.prototype.add = function( key, value ) {
    const isKeyValueValid = typeof key == "string" && typeof value == "number";
    if( !isKeyValueValid ) throw Error("The key must be a string and the value must be a number");

    const hashCode = this.hash( key );
    this.array[hashCode] = new Element(key, value);
}

HashTable.prototype.delete = function( key ) {
    this.checkKeyValidity(key);

    const hashCode = this.hash( key );
    this.array.splice( hashCode, 1 );
}

HashTable.prototype.get = function( key ) {
    this.checkKeyValidity(key);

    const hashCode = this.hash( key );
    return this.array[ hashCode ];
}

HashTable.prototype.hash = function( key ) {
    this.checkKeyValidity(key);

    let hash = 5381;
    for( let i = 0; i < key.length; i++ ) {
        hash = hash * 33 + key.charCodeAt(0);
    }
    return hash % this.size;
    // return hash;
}

HashTable.prototype.print = function() {
    console.log(this.array);
}

HashTable.prototype.checkKeyValidity = function(key) {
    const isKeyValid = typeof key == "string";
    if( !isKeyValid ) throw Error("The key must be a string.");
}