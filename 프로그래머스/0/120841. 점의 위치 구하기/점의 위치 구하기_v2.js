function solution(dot) {
    const [x, y] = dot;
    const check = x * y > 0; // 양수이면 true, 음수이면 false
    return x > 0 ? (check ? 1 : 4) : (check ? 2 : 3);
}