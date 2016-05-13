(function(){

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

	/*** SCRAPBOOK ***********************/

	var scrapbookClose = document.getElementById('js-close_scrapbook_container'),
		scrapbookContainer = document.getElementById('js-scrapbook_container'),
		scrapbookImages = document.getElementsByClassName('scrapbook_img'),
		scrapbookImageContainer = document.getElementById('js-scrapbook_img_container');


	scrapbookClose.addEventListener('click', function(event){
		event.preventDefault();
		scrapbookContainer.classList.toggle('scrapbook_container-is_active');
	});

	for( var i = 0; i < scrapbookImages.length; i++ ){
		scrapbookImages[i].addEventListener('click', function(event){
			event.preventDefault();
			scrapbookContainer.classList.toggle('scrapbook_container-is_active');
		});
	}

})();