'use strict';

// console.log('JavaScript is running.');
// window.onscroll = function() {myFunction()};
      
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
// coll[i].addEventListener("click", function() {
// this.classList.toggle("active");
// var content = this.nextElementSibling;
// if (content.style.display === "block") {
// content.style.display = "none";
// } else {
// content.style.display = "block";
// }
// });
// }

// var navbar = document.querySelector('#navbar');

// navbar.classList.add('hidden');
// navbar.setAttribute('aria-hidden', 'true');
// navbar.setAttribute('aria-labelledby', 'menu-toggle');

// var navFirstItem = document.querySelector('#navbar a:first-of-type');
// var header = document.querySelector('header');
// var navToggle = document.createElement('button');
// navToggle.classList.add('button');
// navToggle.setAttribute('id', 'nav-toggle');

// navToggle.innerHTML = 'Menu';


// navToggle.setAttribute('aria-label', 'Menu');
// navToggle.setAttribute('aria-controls', 'navbar'); // Note this connects to an ID
// navToggle.setAttribute('aria-expanded', 'false');

// header.insertBefore(navToggle, navbar);

// navToggle.addEventListener('click',
// 	function() {

//     console.log('navToggle has been clicked.');
//     if ( navbar.classList.contains('hidden') ) {
// 			console.log('Menu is hidden, showing the menu.');
//       navbar.classList.remove('hidden');
      
//       navbar.setAttribute('aria-hidden', 'false');
//       navbar.setAttribute('aria-expanded', 'true');
//       navFirstItem.focus();
//     }
//     else {
// 			console.log('Menu is shown, hiding the menu.');


// 			/* 
// 				We want to remove add 'hidden' class to ensure that the navigation items are hidden.
// 			*/
// 			navbar.classList.add('hidden');
//       navbar.setAttribute('aria-hidden', 'true');
// 			navbar.setAttribute('aria-expanded', 'false');
// 		}

// 	}
// );

function toggle() {
  var x = document.getElementById("navbar");
  if (x.className === "menu-items") {
    x.className += " responsive";
  } else {
    x.className = "menu-items";
  }
}