'use strict';

// console.log('JavaScript is running.');
// window.onscroll = function() {fixed()};
      
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function fixed() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function toggle() {
  var x = document.getElementById("navbar");
  if (x.className === "menu-items") {
    x.className += " responsive";
  } else {
    x.className = "menu-items";
  }
}