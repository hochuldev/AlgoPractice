// 프로그래머스 문제: 예산. 링크: https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let count = 0;
    sortedDemand = d.sort(compare);
    while(budget > 0) {
        let min = sortedDemand.shift();
        budget -= min;
        if( budget >= 0 ) count++;
    }
    return count;
    
}

function compare(a, b) {
    return a-b;
}