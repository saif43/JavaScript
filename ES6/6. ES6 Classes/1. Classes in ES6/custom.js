class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

console.log(square); // Rectangle { height: 5, width: 5 }


var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

var Student = class {
    constructor(id, classnumber) {
        this.id = id;
        this.classnumber = classnumber;
    }
};

let saif = new Student(121, 2);

console.log(saif);