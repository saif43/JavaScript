window.onload = function(){
    var btn = document.getElementById("demo");
    // btn.addEventListener("click", myFunction);
    btn.addEventListener("click", myFunction);
    
    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
}