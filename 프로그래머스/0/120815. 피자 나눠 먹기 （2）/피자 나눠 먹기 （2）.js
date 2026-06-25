// 유클리드 호제법
function gcd(a, b) {
    while (b !== 0) {
        let temp = b; 
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(n) {
    const count = gcd(n, 6);
    return n / count;
}


