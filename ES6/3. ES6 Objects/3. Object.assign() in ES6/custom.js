let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
// let newStudent = Object.assign({}, person, student);
let newStudent = Object.assign({}, student, person);

console.log(newStudent);

console.log('----------------------------------');

let person2 = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person2, {name: 'Bob'});

console.log(newPerson);

console.log('----------------------------------');

const obj1 = {
  a: 0,
  b: 2,
  c: 4
};
const obj2 = Object.assign({c: 5, d: 6}, obj1);
console.log(obj2);