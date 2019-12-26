let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

console.log(`user name is ${user.name} and user ID is ${user.user_1234}`)

console.log('-------------------');

// var i = 0;
// var a = {
//   ['foo' + ++i]: i,
//   ['foo' + ++i]: i,
//   ['foo' + ++i]: i
// };

var i = 0;
var a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3


console.log('-------------------');

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config);