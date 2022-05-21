
function answer( orderOfPlates ) {
    const dishWasher = [];
    const platesInNumbers = orderOfPlatesToNumbers( orderOfPlates ); //Each plate is converted to a number such that a = 0, b = 1, c = 2, d = 3 ,..., z = 25
    const pushPopSequence = []; // 
    // const isOrderOfPlatesValid = ;
    let platesAlreadyPushed = [];
    

    for( let i = 0; i < platesInNumbers.length; i++ ){
        let plateToPop = platesInNumbers[i];

        if ( !dishWasher.includes(plateToPop) ) { // If the dishwasher does not include the plate, add all the plates upto the plate. This is executed since the plate must be in the dishwasher for the plate to be "popped".
            for( let j = 0; j <= plateToPop; j++ ){
                if( !platesAlreadyPushed.includes(j) ) {
                    dishWasher.push(j);
                    pushPopSequence.push(0);
                    platesAlreadyPushed.push(j)
                }
            }
        }

        let poppablePlate = dishWasher[ dishWasher.length - 1 ];
        if( plateToPop != poppablePlate ) {
            return [];
        }
        dishWasher.pop();
        pushPopSequence.push(1);
    }
    return pushPopSequence;
}

function plateToNumber( char ) {
    return char.charCodeAt(0) % 97 ;
}

function orderOfPlatesToNumbers( orderOfPlates ) {
    const platesInNumbers = [];
    for( let i = 0; i < orderOfPlates.length; i++ ){
        let plate = orderOfPlates[i];
        let plateInNumber = plateToNumber( plate );
        platesInNumbers.push( plateInNumber );
    }
    return platesInNumbers;
}

function expect( result ) {
    return {
        toBe: function( expected ) {
            console.log( `expected: ${expected}, result: ${result} ` );
        }
    }
}

expect( answer( "bacd" ) ).toBe( [0,0,1,1,0,1,0,1] );
expect( answer( "dabc" ) ).toBe( [] );
expect( answer( "edcfgbijha" ) ).toBe( [0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1] );
