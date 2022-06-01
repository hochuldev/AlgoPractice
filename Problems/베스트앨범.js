// 프로그래머스 문제: 베스트앨범. 링크: https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
    const sortedGenres = sortGenresByPlays( genres, plays );
    const sortedSongsOfAllGenres = sortSongsOfAllGenres( genres, plays );
    const tempSolution = [];
    const finalSolution = [];
    sortedGenres.forEach( (genre1) => {
        sortedSongsOfAllGenres.forEach( (array) => {
            let genre2 = array[0];
            if( genre1 === genre2 ) {
                tempSolution.push(array);
            }
        } )
    } );
    tempSolution.forEach( (array) => {
        for( let i = 1; i < array.length; i++ ){
            finalSolution.push(array[i]);
        }
    } );

    return finalSolution;

}

function sortGenresByPlays( genres, plays ) { 
    const genreList = createGenreList( genres );
    const allGenrePlays = calculateAllGenrePlays( genreList, genres, plays); 
    allGenrePlays.sort( (array1, array2) => array2[1] - array1[1] ); 
    const sortedGenres = [];
    allGenrePlays.forEach( (array) => {
        sortedGenres.push(array[0]);
    } );
    return sortedGenres;
}

function calculateAllGenrePlays( genreList, genres, plays ) { 
    const allGenrePlays = [];
    genreList.forEach( (genre) => {
        allGenrePlays.push( [ genre ,calculateGenrePlays(genre, genres, plays) ] );
    } );
    return allGenrePlays;
}

function calculateGenrePlays( genre, genres, plays ) {
    const songsOfGenre = createSongsOfGenre( genre, genres);
    let genrePlays = 0;
    songsOfGenre.forEach( (songId, index) => {
        if( index === 0 ) return; // 첫번째 element를 제외하면, 모두 다 songId이다. 첫번째 element는 장르이기 때문에 play횟수를 계산하는데 쓸모가 없다.
        
        genrePlays += plays[songId];
    } );
    return genrePlays;
}

function sortSongsOfAllGenres( genres, plays ){
    const genreList = createGenreList(genres);
    const sortedSongs = [];
    genreList.forEach( (genre) => {
        sortedSongs.push( sortSongsOfGenre( genre, genres, plays ) );
    } );
    return sortedSongs;
}

function createGenreList(genres) {
    const genreList = [];
    genres.forEach( (genre) => {
        if( !genreList.includes(genre) ){
            genreList.push(genre);
        }
    } )
        
    return genreList;
}

function sortSongsOfGenre( genre, genres, plays ) {
    const songsOfGenre = createSongsOfGenre( genre, genres);
    songsOfGenre.sort( (a,b) => plays[b] - plays[a] );
    return songsOfGenre.splice(0,3);
}

function createSongsOfGenre( targetGenre, genres ) { 
    const songsOfGenreArray = [targetGenre];

    genres.forEach( (genre, songId) => {
        if( genre == targetGenre ){
            songsOfGenreArray.push(songId);
        }
    } )
    return songsOfGenreArray;

} 
