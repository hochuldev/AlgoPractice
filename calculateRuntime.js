//shift와 unshift를 테스트하는거다.
//createDataStructureOf

function calculateRuntime( maxSize ) {
    
    for( let i = 0; i < maxSize; i++ ){
        let queue = createQueueOfSizeN( i );
        let initialTime = new Date();
        queue.unshift(35);
        let finalTime = new Date();
        let runtime = finalTime - initialTime;
        console.log( `runtime when the size of the queue is ${i}: ${runtime}` );
    }
}

function createQueueOfSizeN( N ) {
    let queue = [];
    for( let i = 0; i < N; i++ ){
        queue.push(i);
    }
    return queue;
}

calculateRuntime(1000);