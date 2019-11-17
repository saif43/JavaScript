let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); // 12


let height = 5;
let health = 100;

let athlete = {
  height,
  health
};

console.log(athlete.health); //100