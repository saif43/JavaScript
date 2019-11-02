window.onload = function(){
    var p = document.createElement('h2');
    var node = document.createTextNode('This is some text');
    p.appendChild(node);

    document.getElementById('demo').appendChild(p);
}

function addNumber(){
    var len = document.getElementsByTagName('li').length;
    
    var li = document.createElement('li');
    var node = document.createTextNode(len+1);

    li.appendChild(node);

    document.getElementById('numbers').appendChild(li);
}

function rmvNumber(){
    var len = document.getElementById('numbers').childElementCount;
    
    var numbers = document.getElementById('numbers');

    numbers.removeChild(numbers.lastChild);

    
}