// old way

function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

console.log('-----------------');

// new way

const myNewFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let argsN = [1, 2, 3];
myNewFunction(...argsN, 4);

console.log('-----------------');

var dateFields = [1970, 1, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

console.log('-----------------');

// Before ES6, we used the following syntax to add an item at middle of an array:
// old way

var arrr = ["One", "Two", "Five"];

arrr.splice(2, 0, "Three");
arrr.splice(3, 0, "Four");
console.log(arrr);

console.log('-----------------');

// new way

let newArr = ['Three', 'Four'];
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);

console.log('-----------------');

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }

console.log(clonedObj);
console.log(mergedObj);

console.log('-----------------');

const obj3 = { foo: 'bar', x: 42 };
const obj4 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({...objects});

let mergedObj1 = merge(obj3, obj4);
console.log(mergedObj)
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj3, obj4);
console.log(mergedObj)
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }