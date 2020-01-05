let map1 = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map1.size); // 2

console.log(map1); // Map { 'k1' => 'v1', 'k2' => 'v2' }

console.log('---------------------');

let map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map);

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);