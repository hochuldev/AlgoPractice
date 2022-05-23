
function cardOrder(N) {
    const deck = makeDeck(N);
    const withdrawnCards = [];
    for(let i = 0; i < N; i++){
        withdrawnCards.push( deck.pop() ); 
        deck.unshift( deck.pop() );
    }
    return withdrawnCards;
}

function makeDeck(N) {
    let deck = [];
    for( let i = N; i >= 1; i-- ){
        deck.push(i);
    }
    return deck;
}