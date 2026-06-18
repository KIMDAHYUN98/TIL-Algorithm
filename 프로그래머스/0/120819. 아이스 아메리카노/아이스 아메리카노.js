function solution(money) {
    const cnt = Math.floor(money/5500);
    const charge = money - (5500*cnt);

    return [cnt, charge]
}