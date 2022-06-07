
function solution(brown, yellow) {
    for( let i = 0; i < brown; i++ ){
      for( let j = 0; j < brown; j++ ){
        if( isPossible(brown, yellow, [i,j]) ){
          if( i < j ){
            let k = i;
            i = j;
            j = k;
          }
          return [i,j];
        }
      }
    }
}
    
function isPossible(brown, yellow, array){
    const length = array[0];
    const width = array[1];
    const perimeter = 2 * (length+width) - 4;
    const area1 = length * width;
    const area2 = brown + yellow;
    if( brown === perimeter && area1 === area2 ) return true;
    return false;
}

console.log( solution(10, 2) );