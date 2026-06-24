function solution(numbers) {
    numbers.sort((a, b) => b - a); // 내림차순
    return numbers[0] * numbers[1]; 
}