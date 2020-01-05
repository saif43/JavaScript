console.log([4, 5, 1, 8, 2, 0].filter(function (x) {
    return x > 3;
}));

console.log([4, 5, 1, 8, 2, 0].find(x => x > 3));

console.log([4, 5, 1, 8, 2, 0].findIndex(x => x > 3));

console.log('---------------------');

console.log(Array(3 + 1).join("foo")); // foofoofoo

console.log('---------------------');

console.log("SoloLearn".indexOf("Solo") === 0); // true
console.log("SoloLearn".indexOf("Solo") === (4 - "Solo".length)); // true
console.log("SoloLearn".indexOf("loLe") !== -1); // true
console.log("SoloLearn".indexOf("olo", 1) !== -1); // true
console.log("SoloLearn".indexOf("olo", 2) !== -1); // false

console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false

const arr = ['3', '5', '8'];
console.log(
    arr.find(x => x == 8).repeat(2)
);


const num = 5;
const calc = (x, y, z = num) -> {
    return x + y + z;
}