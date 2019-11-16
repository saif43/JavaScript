function add(x, y) {
    var sum = x + y;
    console.log(sum);
}

const add2 = (x, y) => {
    let sum = x + y;
    console.log(sum);
}


add(1, 2);
add2(2, 2);

const greet = x => console.log("Welcome " + x);
greet('Saif');

// If there are no parameters, an empty pair of parentheses should be used, as in
const x = () => console.log('Hi');
x();

console.log('------------------------------');

var arr = [2, 3, 7, 8];

arr.forEach(function (el) {
    console.log(el * 2);
});


console.log('------------------------------');

const arr1 = [2, 3, 7, 8];

arr.forEach(v => {
    console.log(v * 2);
});

console.log('------------------------------');

function test(a, b = 3, c = 42) {
    return a + b + c;
}
console.log(test(5)); //50

console.log('------------------------------');

