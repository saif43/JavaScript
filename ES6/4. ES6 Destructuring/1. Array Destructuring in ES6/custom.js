let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

console.log('----------------------------------');


let a = () => {
    return [1, 3, 2];
};

console.log(a());
// let [one, , two] = a();