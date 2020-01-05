let set1 = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set1.size); // 5

console.log('----------------------');

let set = new Set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

console.log('Set values =>');
for (let v of set.values())
    console.log(v);

// Methods
// add(value) Adds a new element with the given value to the Set.
// delete(value) Deletes a specified value from the set.
// has(value) Returns true if a specified value exists in the set and false otherwise.
// clear() Clears the set.
// values() Returns an Iterator of values in the set.