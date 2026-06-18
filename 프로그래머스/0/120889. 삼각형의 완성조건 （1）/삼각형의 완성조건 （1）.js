function solution(sides) {
    const large = Math.max(...sides);
    const largeIdx = sides.indexOf(large);
    
    return sides.filter((cur, i) => i !== largeIdx).reduce((acc, cur) => acc + cur > large ? 1 : 2)
}