function solution(num_list) {
    let arr = [0, 0];
    for(num of num_list) {
        arr[num % 2] += 1;
    }
    return arr;
}
