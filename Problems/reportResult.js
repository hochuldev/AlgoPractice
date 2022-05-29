// 프로그래머스 문제: "신고 결과 받기". 링크: https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    
    let mailHash = idListToHash( id_list );
    let reportInHash = reportToHash( report );
    
    for( [reported, reportersInHash] of reportInHash ) {
        if( reportersInHash.size >= k ) {
            for( [reporter, v] of reportersInHash ) {
                mailHash.set( reporter, mailHash.get(reporter) + 1 );
            }
        }
    }
    let newList = [];
    id_list.forEach( (value) => {
        newList.push( mailHash.get(value) );
    } );
    
    var answer = newList;
    return answer;
}

function idListToHash( idList ) {
    let newMap = new Map();
    idList.forEach( (value) => {
        newMap.set( value, 0 );
    } );
    return newMap;
}

function reportToHash( report ) {
    let reportInHash = new Map();

    report.forEach( (value) => {
        let arr = value.split(" ");
        
        if( reportInHash.get( arr[1] ) == undefined ) {
            let newMap = new Map();
            newMap.set( arr[0] , 1);
            reportInHash.set( arr[1], newMap );
        }else{
            reportInHash.get( arr[1] ).set(arr[0], 1);
        }
    } );
    return reportInHash;
}


let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let k = 2;

console.log( solution(id_list, report, k) );