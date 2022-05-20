

function answer( trainSequence ) {
    const platform = [];
    let num = 1;
    let isSuccessful = true;
    trainSequence.forEach( ( value) => {
        while( num <= value ){
            platform.push(num++);
        }
        if ( value == platform[ platform.length - 1 ] ) platform.pop();
        else isSuccessful = false;
    } );

    return isSuccessful;

}

let input = [
    [1,2,3],

    [1,3,2],

    [2,1,3],
    
    [2,3,1],

    [3,2,1],

    [3,1,2],
];

for( let i = 0; i < input.length; i++ ){
    console.log( `${i + 1}th case: ${answer(input[i])} ` )
}