function solution(problems) {
    let counter = 0;
    problems.forEach( (problem) => {
        if( hasConcentrated(problem) === true ) counter++;
    } );
    return counter;
}

function tokenize(problem){
    const tokens = [];
    for( let i = 0; i < problem.length; i++ ){
        if( problem[i] !== problem[i+1] ) tokens.push(problem[i]);
    }
    return tokens;
}

function hasConcentrated(prob){
    let concentrated = true;
    const tokens = tokenize(prob);
    const collisionCounter = new Map();
    tokens.forEach( (letter) => {
        if( collisionCounter.get(letter) === undefined ) collisionCounter.set(letter, 1);
        else concentrated = false;
    } );
    return concentrated;
}