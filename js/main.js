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


	/******************************************************
	* 
	* Functionality to show / hide the gallery window 
	*
	******************************************************/

	var modal = document.getElementById('js-modal'),
		modalMainContent = document.getElementById('js-modal_main_content'),

		//Clickable elements
		modalBG = document.getElementById('js-modal_bg'),
		modalCloseBtn = document.getElementById('js-modal_close'),
		scrapbookImages = document.getElementsByClassName('scrapbook_img'),
		scrapbookImagesTotal = scrapbookImages.length;

		modalImageContainer = document.getElementById('js-modal_gallery_container'),
		currentImageTitle = document.getElementById('js-modal_main_sidebar_content_title'),
		currentImageDesc = document.getElementById('js-modal_main_sidebar_content_desc'),

		previousBtn = document.getElementById('js-modal_main_content-previous_button'),
		nextBtn = document.getElementById('js-modal_main_content-next_button');



	modalBG.addEventListener( 'click', toggleModalHide,false );
	modalCloseBtn.addEventListener( 'click', toggleModalHide,false );


	var frag = document.createDocumentFragment();

	for( var i = 0; i < scrapbookImages.length; i++ ){
			scrapbookImages[i].addEventListener('click', toggleModalVisible.bind(null, i), false );

			var span = document.createElement("span");
			span.classList.add('modal_img_container');
			frag.appendChild(span);

		}

	modalImageContainer.appendChild(frag);

	function toggleModalHide(event){
		event.preventDefault();
		modal.classList.remove('modal-active');
		body.classList.remove('no_scroll');
	}


	function toggleModalVisible(index){
		event.preventDefault();

		var order = scrapbookImages[index].getAttribute('data-order'),
			title = scrapbookImages[index].getAttribute('data-title'),
			desc = scrapbookImages[index].getAttribute('data-desc'),
			containers = document.getElementsByClassName('modal_img_container');

		//Injects the active image into the DOM 
		var newImg = document.createElement('img');
		newImg.classList.add('modal_main_img');
		newImg.src = "img/scrapbook/image"+ order + ".jpg";
		newImg.alt = desc;
		containers[index].appendChild(newImg);

		//Sets the data attribute values of the next/previous buttons
		previousBtn.setAttribute('data-previous', Number(order) - 1);
		nextBtn.setAttribute('data-next', Number(order) + 1);

		//Repositions the viewport to the active image
		var translateValue = 'translateX(' + (scrapbookImages[index].getAttribute('data-order') - 1) * -100 + '%)';
		modalImageContainer.style.transform = translateValue;

		//Sets the title and description of the active image in the side content area
		currentImageTitle.innerHTML = title;
		currentImageDesc.innerHTML = desc;

		//Active classes added for presentation
		modal.classList.add('modal-active');
		body.classList.add('no_scroll');

	}


	/******************************************************
	* 
	* Functionality to zoom in out on chosen image 
	*
	******************************************************/

	/*var zoomBtn = document.getElementById('js-modal_zoom_in');

	zoomBtn.addEventListener('click', function(ev){
		ev.preventDefault();
		modalMainContent.classList.toggle('modal_main_content-zoomed_in');
	});*/


	/******************************************************
	* 
	* Functionality to scroll between images 
	*
	******************************************************/

	var forwardBtn = document.getElementById('js-modal_main_content-next_button'),
		backBtn = document.getElementById('js-modal_main_content-previous_button');

	forwardBtn.addEventListener('click', goForward, false);
	backBtn.addEventListener('click', goBack, false);



	function goForward(){

		var nextNo = Number( forwardBtn.getAttribute('data-next') );

		if (nextNo > scrapbookImagesTotal){
			return;
		}

		console.log( nextNo );
		console.log( scrapbookImagesTotal );


		//var desc = scrapbookImages[nextNo].getAttribute('data-desc'),
		var	containers = document.getElementsByClassName('modal_img_container');


		var translateValue = 'translateX(' + (((nextNo - 1) * 100) * -1) + '%)';
		modalImageContainer.style.transform = translateValue;


		previousBtn.setAttribute( 'data-previous', Number(nextNo) - 1 );
		nextBtn.setAttribute( 'data-next', Number(nextNo) + 1 );

		//Only insert Image tag if the container is empty
		if(containers[nextNo - 1].innerHTML === ""){

			//Injects the active image into the DOM 
			var newImg = document.createElement('img');
			newImg.classList.add('modal_main_img');
			newImg.src = "img/scrapbook/image"+ nextNo + ".jpg";
			//newImg.alt = desc;
			containers[nextNo - 1].appendChild(newImg);

		}





		/*

		update data attributes of forward / back buttons
		translate container to next image
		inject image into container
		update title and desc


		*/
	}

	function goBack(){
		
		var previousNo = Number( backBtn.getAttribute('data-previous') );

		if( previousNo === 0 ){
			return;
		}

		var translateValue = 'translateX(' + (((previousNo - 1) * 100) * -1) + '%)';
		modalImageContainer.style.transform = translateValue;

		previousBtn.setAttribute( 'data-previous', Number(previousNo) - 1 );
		nextBtn.setAttribute( 'data-next', Number(previousNo) + 1 );

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