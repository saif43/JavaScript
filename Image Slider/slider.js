var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0;



function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

function halfPrice() {
  var price = document.getElementById("price");

  price.innerHTML = Math.round(price.innerHTML / 2);

}

function doublePrice() {
  var price = document.getElementById("price");

  price.innerHTML = Math.round(price.innerHTML * 2);

}

window.onload = function () {
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");

  // addEventListener("click", halfPrice, true);
  prevBtn.addEventListener("click", halfPrice, true);
  prevBtn.addEventListener("click", prev, true);
  nextBtn.addEventListener("click", doublePrice, true);
  nextBtn.addEventListener("click", next, true);
}