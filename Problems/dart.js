function solution(dartResult) {
    const separatedResult = separateDartResult( dartResult );
    const scoreMap = new Map();
    
    console.log( separatedResult );
    
    separatedResult.forEach( (value, index) => {
        let baseNumber = 0;
        let exponent = 1;
        let multiplier = 1;
        const hasMultiplier = value[ 0 ] === "*" || value[ 0 ] === "#";

        if( value[ value.length-1 ] === "D" ) exponent = 2;
        if( value[ value.length-1 ] === "T" ) exponent = 3;

        if( hasMultiplier ) {
            if( value[ 0 ] == "*" ) multiplier = 2;
            if( value[ 0 ] == "#" ) multiplier = -1;

            const hasTen = value.length === 4;
            if( hasTen ) baseNumber = value.slice[1,2];
            else baseNumber = value[1];
        }else {
            const hasTen = value.length === 3;
            if( hasTen ) baseNumber = value.slice[0,1];
            else baseNumber = value[0];
        }
        

    } );

}

function separateDartResult( dartResult ) { // 결과 sequence를 tokenize 하는 함수.
    let separatedResult = []                // TODO: regular expression을 공부하여 깔끔하게 해결하자. 어차피 사용자의 input을 받을 때 regular expression을 사용할 일이 있을것.
    let index = 0;
    while ( dartResult.length > 0 ) {
        dartResult.find("S");
        dartResult.find("D");
        dartResult.find("T");        
        index++;
    }
    return separatedResult;
}

let dartResult = "1S2D*3T";
solution( dartResult )
// console.log( solution( dartResult ) );