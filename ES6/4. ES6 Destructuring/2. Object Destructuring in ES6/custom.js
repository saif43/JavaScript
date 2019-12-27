let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true

console.log('-------------------------');

let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b); // Hello Jack


console.log('-------------------------');

let {x, y} = {x: 'Hello ', y: 'Jack'};
console.log(x + y);

console.log('-------------------------');

var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42
console.log(o.h); // 42

console.log('-------------------------');

var objj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = objj;

console.log(id); // 42
console.log(age); // 20