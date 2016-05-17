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


	var testOpen = document.getElementById('test'),
		modalBG = document.getElementById('js-modal_bg'),
		modalCloseBtn = document.getElementById('js-modal_close'),
		modal = document.getElementById('js-modal');

	testOpen.addEventListener('click', toggleModalVisibility,false);
	modalBG.addEventListener( 'click', toggleModalVisibility,false );
	modalCloseBtn.addEventListener( 'click', toggleModalVisibility,false );

	function toggleModalVisibility(){
		event.preventDefault();
		modal.classList.toggle('modal-active');
	}

	/*var scrapbookClose = document.getElementById('js-close_scrapbook_container'),
		scrapbookContainer = document.getElementById('js-scrapbook_container'),
		scrapbookImages = document.getElementsByClassName('scrapbook_img'),
		scrapbookImageContainer = document.getElementById('js-scrapbook_img_container');

		var clickable = true;


		scrapbookClose.addEventListener('click', function(event){
			event.preventDefault();
			scrapbookContainer.classList.toggle('scrapbook_container-is_active');
			scrapbookImageContainer.style.transform = null;
			clickable = true;
		});



		for( var i = 0; i < scrapbookImages.length; i++ ){
			scrapbookImages[i].addEventListener('click', listener.bind(null, i), false );
		}


		function listener(index) {
		    event.preventDefault();

			var translateValue = 'translateX(' + scrapbookImages[index].getAttribute('data-order') * -100 + '%)';
			if( clickable ){
				scrapbookContainer.classList.toggle('scrapbook_container-is_active');
				scrapbookImageContainer.style.transform = translateValue;
				clickable = false;
			}

		}
	*/



})();