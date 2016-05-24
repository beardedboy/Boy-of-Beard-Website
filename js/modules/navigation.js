/*********************************************************
*
*	Navigation
*
*********************************************************/

(function(){

	"use strict";

	/*** MAIN NAVIGATION *****************/

	var body = document.body,
		rootContainer = document.getElementById('js-root'),
		mainMenu = document.getElementById('js-main_nav'),
		mainMenuIcon = document.getElementById('js-main_nav_icon'),
		mainMenuClose = document.getElementById('js-main_nav_close_icon');

		mainMenuIcon.addEventListener('click', function(event){
			event.preventDefault();
			mainMenu.classList.toggle('main_nav-active');
			body.classList.toggle('no_scroll-sm_only');
		});

		mainMenuClose.addEventListener('click', function(event){
			event.preventDefault();
			mainMenu.classList.remove('main_nav-active');
			body.classList.toggle('no_scroll-sm_only');
		});

})();

