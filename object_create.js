function Person(name,bornYear,height){
    this.name = name;
    this.bornYear = bornYear;
    this.getAge = getAge;
    this.height = height;
    this.changeheight = function(height){
        this.height = height;
    }
}

function getAge(){
    return 2019-this.bornYear;
}

saif = new Person('Saif Ahmed Anik',1994,5.5)

document.write(saif.name+'<br>')
document.write(saif.height+'<br>')
saif.changeheight(5.6)
document.write(saif.height+'<br>')
document.write(saif.getAge()+'<br>')