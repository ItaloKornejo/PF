
var swiper = new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},  
	slidesPerView: 'auto',
	spaceBetween: 10,
	freeMode: true,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
		350: {
			slidesPerView:'auto',
			spaceBetween: 20,
		},
		
	  	550: {
			slidesPerView: 'auto',
			spaceBetween: 20,
	  	},
	  	680: {
			slidesPerView: 'auto',
			spaceBetween: 20,
	  	},
	  	920: {
			slidesPerView: 'auto',
			spaceBetween: 40,
	  	},
	 	1240: {
			slidesPerView:'auto',
			spaceBetween: 40,
	  },
	} 
    });


const iconMenu = document.querySelector('#iconNav');

const navMenu = document.querySelector('#contentNavbar');

const selectSection = document.querySelector('.navbar-items');

const contMenu = document.querySelector('#contentMenu');


selectSection.addEventListener("click", (e) => {
	console.log(selectSection);
	contMenu.classList.toggle("content-menu-show");
});

iconMenu.addEventListener("click", (e) => {
	console.log(selectSection.classList);
	contMenu.classList.toggle("content-menu-show");
});

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
    navMenu.classList.add("content-navbar-show");
  } else {
    navMenu.classList.remove("content-navbar-show");
  }
};

