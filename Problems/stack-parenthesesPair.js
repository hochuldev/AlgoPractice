function answer( equation ) {
    const stack = new Array();
    const equationToArray = equation.split("");
    const arrayOfIndices = [];
    let length = 0;
    equationToArray.forEach( ( value, index ,array ) => {
        if(value === "(") { 
            stack.push(index);
            length++;
        }else if (value === ")") { 
            const indexOfOpenParenthesis = stack.pop();
            const indexOfCloseParaenthesis = index;
            arrayOfIndices.push( [indexOfOpenParenthesis, indexOfCloseParaenthesis ] );
            length++;
        }
    } );
    if (length % 2 !== 0) return [];
    return arrayOfIndices;
}

function expect( result ) {
    return {
        toBe: function( expected ) {
            console.log( `expected: ${expected}, result: ${result} ` );
        }
    }
}

expect( answer( "(a+b)" ) ).toBe( [[0,4]] );
expect( answer( "(a*(b+c)+d)" ) ).toBe( [ [3,7], [0,10] ] );
expect( answer( "(a*(b+c)+d+e()" ) ).toBe( [] );
expect( answer( "(a*(b+c)+d)+e)" ) ).toBe( [] );
expect( answer( "(a*(b+c)+d)+(e*(f+g))" ) ).toBe( [ [3,7], [0,10], [15,19], [12,20] ] );