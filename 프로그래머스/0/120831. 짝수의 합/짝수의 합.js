function solution(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i % 2 === 0 ? i : 0;
    };
    return sum;
};