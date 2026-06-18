function solution(num_list) {
    let even = 0, odd = 0;
    for(num of num_list) {
        even += num % 2 === 0 ? 1 : 0;
        odd += num % 2 !== 0 ? 1 : 0;
    };
    return [ even, odd ]
}