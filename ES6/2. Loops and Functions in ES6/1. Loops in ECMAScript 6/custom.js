let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}
console.log('---------------------------------------');

let obj = { a: 1, b: 2, c: 3 };
for (let v in obj) {
    console.log(v);
}

console.log('---------------------------------------');

let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

console.log('---------------------------------------');

for (let ch of "Hello") {
    console.log(ch);
}