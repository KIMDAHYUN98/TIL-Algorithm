
// 방법 1
function solution(sides) {
    const large = Math.max(...sides);
    const largeIdx = sides.indexOf(large);
    
    return sides.filter((cur, i) => i !== largeIdx).reduce((acc, cur) => acc + cur > large ? 1 : 2)
}

// 방법 2, sort 방식으로 오름차순으로 정렬 후 삼항 연산자로 비교
function solution(sides) {
    sides = sides.sort((a, b) => a - b); // 오름차순으로 정렬
    return side[0] + side[1] > side[2] ? 1 : 2;
}
