let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

console.log('----------------------------------');


let aa = () => {
    return [1, 3, 2];
};

console.log(aa());
console.log('----------------------------------');


let [oneX, , twoX] = aa();

console.log(oneX);
console.log(twoX);

console.log('----------------------------------');

let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6

[c, d] = [d, c]; // c = 8, d = 4

console.log(a,b)
console.log(c,d)