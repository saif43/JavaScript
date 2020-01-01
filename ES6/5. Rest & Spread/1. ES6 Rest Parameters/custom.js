function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

console.log('---------------------------');

function magic(...nums) {
    console.log(nums);
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));