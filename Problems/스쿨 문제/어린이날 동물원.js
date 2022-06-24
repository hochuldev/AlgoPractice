function solution(note) {
  let mostFrequentAnimals = [];
  let counterMap = new Map();
  note.forEach( (animal) => {
      if( counterMap.get(animal) === undefined ) {
          counterMap.set(animal, 1);
      }else{
          counterMap.set( animal ,counterMap.get(animal) + 1 );
      }
  } );
  let counterArr = [];
  counterMap.forEach( (counter, animal) => counterArr.push([animal, counter]) );
  counterArr.sort( (a,b) => b[1] - a[1] );
  mostFrequentAnimals.push(counterArr[0]);
  counterArr.forEach( (row) => {
      let counter = row[1];
      if( counter === mostFrequentAnimals[0][1] ){
          mostFrequentAnimals.push(row);
      }
  } );
  mostFrequentAnimals.sort( (animal1,animal2) => {
      let animal1Name = animal1[0].toLowerCase();
      let animal2Name = animal2[0].toLowerCase();
      if(animal1Name > animal2Name) return 1;
      return 0;
  } );
  return mostFrequentAnimals.shift()[0];
}

solution(["dolphin", "elephant", "elephant"]);