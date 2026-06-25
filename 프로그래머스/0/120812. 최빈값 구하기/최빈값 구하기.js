function solution(array) {
    let count = {};
    array.forEach(num => count[num] = (count[num] || 0) + 1); // count => { 1:1, 2:1, 3:3, 4:1 }
    const max = Math.max(...Object.values(count)) // [3, 1, 1, 1]
    const mode = Object.keys(count).filter(idx => count[idx] === max); // count[2] === 3
    
    return mode.length === 1 ? Number(mode[0]) : -1;
}