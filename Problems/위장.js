
function solution(clothes) {
    const clothesInHash = clothesToHash( clothes );
    let combination = 1;

    for( let [clothType, clothName] of clothesInHash ) {
        const length = clothName.length + 1;
        combination *= length;
    }
    return combination - 1;
}

function clothesToHash( clothes ) {
    let clothesInHash = new Map();
    
    clothes.forEach( (value) => {
        let clothName = value[0];
        let clothType = value[1];
        
        if( clothesInHash.get(clothType) === undefined ){
            clothName = [clothName];
            clothesInHash.set( clothType, clothName );
        }else {
            clothesInHash.get(clothType).push(clothName);
        }
        
    } );
    return clothesInHash;
}

let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log( solution(clothes) );