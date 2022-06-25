function solution(array) {
  let newArray = [];
  let commands = [];
  let currentLocation = 0;
  if(array.length <= 0) return ['End'];
  for( let i = 1; i <= 100; i++ ){
      newArray.push(i);
      commands.push("In");
      if( newArray[currentLocation] == array[currentLocation] ) currentLocation++;
      else {
          newArray.pop(i);
          commands.push("Out");
      }
      if( newArray[newArray.length-1] === array[array.length-1] && newArray.length === array.length ){
          commands.push("End");
          return commands;
      }
  }
}

console.log( solution([]) );