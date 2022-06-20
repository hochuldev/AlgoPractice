function solution(people, limit) {
  let counter = 0;
  people.sort( (a,b) => a-b );

  while(people.length > 0){
      if(people.length === 1){
          counter++;
          break;
      }else if (people[0] + people[people.length-1] > limit){
          people.pop();
          counter++;
      }else{
          people.shift();
          people.pop();
          counter++;
      }
  }
  return counter;
}