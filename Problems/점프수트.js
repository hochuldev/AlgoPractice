//프로그래머스 문제: 점프와 순간 이동 링크: https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n)
{
    if( n == 1 ){
        return 1;
    }
    
    else if( n % 2 !== 0 ) {
        let count = solution(Math.floor(n/2));
        return count+1;
    }
    else{
        return solution(n/2);
    }
}

console.log( solution(5000) );