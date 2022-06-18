function solution(operations) {
  let queue = new DoublePriorityQueue();
  for( let i = 0; i < operations.length; i++ ){
    let operation = operations[i];
    let splittedOperation = operation.split(" ");
    if( splittedOperation[0] === "I" ){
      queue.insert(splittedOperation[1]);
    }else if( splittedOperation[0] === "D" && splittedOperation[1] === "1" ){
      queue.deleteMax();
    }else if( splittedOperation[0] === "D" && splittedOperation[1] === "-1" ){
      queue.deleteMin();
    }
  }
  return queue.length() > 0? queue.getMinMax(): [0,0];
} 

function DoublePriorityQueue(){
  this.queue = [];
}

DoublePriorityQueue.prototype.insert = function(data) {
  
  this.queue.push(data);
  this.queue.sort( (a, b) => a - b );
}

DoublePriorityQueue.prototype.deleteMax = function() {
  this.queue.pop();
}

DoublePriorityQueue.prototype.deleteMin = function() {
  this.queue.shift();
}

DoublePriorityQueue.prototype.getMinMax = function() {
  return [Number(this.queue.pop()), Number(this.queue.shift())];
}

DoublePriorityQueue.prototype.length = function() {
  return this.queue.length;
}

console.log( solution(	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]) );