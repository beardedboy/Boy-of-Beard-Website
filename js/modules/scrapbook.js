/*********************************************************
*
*	Scrapbook
*
*********************************************************/

(function(){

	"use strict";

	/******************************************************
	* 
	* Functionality to show / hide the gallery window 
	*
	******************************************************/

	var doc = document,
		body = doc.body,
		modal = doc.getElementById('js-modal'),
		modalMainContent = doc.getElementById('js-modal_main_content'),

		//Clickable elements
		modalBG = doc.getElementById('js-modal_bg'),
		modalCloseBtn = doc.getElementById('js-modal_close'),
		/* Put scrapbook images length into array */
		/* querySelectorAll - pg. 49 */
		scrapbookImages = doc.querySelectorAll('.scrapbook_img'),
		scrapbookImagesLength = scrapbookImages.length,

		modalImageContainer = doc.getElementById('js-modal_gallery_container'),
		currentImageTitle = doc.getElementById('js-modal_main_sidebar_content_title'),
		currentImageDesc = doc.getElementById('js-modal_main_sidebar_content_desc'),

		previousBtn = doc.getElementById('js-modal_main_content-previous_button'),
		nextBtn = doc.getElementById('js-modal_main_content-next_button');



	modalBG.addEventListener( 'click', toggleModalHide,false );
	modalCloseBtn.addEventListener( 'click', toggleModalHide,false );
 

	var frag = doc.createDocumentFragment();

	/* Access length as array and put in variable before using in loop Pg. 44 */
	for( var i = 0; i < scrapbookImagesLength; i++ ){
			
		scrapbookImages[i].addEventListener('click', toggleModalVisible.bind(null, i), false );

		var span = doc.createElement("span");
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
			containers = doc.getElementsByClassName('modal_img_container');

		if( containers[index].innerHTML === "" ){

			//Injects the active image into the DOM 
			var newImg = doc.createElement('img');
			newImg.classList.add('modal_main_img');
			newImg.src = "img/scrapbook/image"+ order + ".jpg";
			newImg.alt = desc;
			containers[index].appendChild(newImg);

		}

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

	/*var zoomBtn = doc.getElementById('js-modal_zoom_in');

	zoomBtn.addEventListener('click', function(ev){
		ev.preventDefault();
		modalMainContent.classList.toggle('modal_main_content-zoomed_in');
	});*/


	/******************************************************
	* 
	* Functionality to scroll between images 
	*
	******************************************************/

	var forwardBtn = doc.getElementById('js-modal_main_content-next_button'),
		backBtn = doc.getElementById('js-modal_main_content-previous_button'),
		containers = doc.getElementsByClassName('modal_img_container');

	forwardBtn.addEventListener('click', goForward, false);
	backBtn.addEventListener('click', goBack, false);



	function goForward(){

		var nextNo = Number( forwardBtn.getAttribute('data-next') );

		if (nextNo > scrapbookImagesLength){
			return;
		}


		var title = scrapbookImages[nextNo].getAttribute('data-title'),
			desc = scrapbookImages[nextNo].getAttribute('data-desc');


		var translateValue = 'translateX(' + (((nextNo - 1) * 100) * -1) + '%)';
		modalImageContainer.style.transform = translateValue;


		previousBtn.setAttribute( 'data-previous', Number(nextNo) - 1 );
		nextBtn.setAttribute( 'data-next', Number(nextNo) + 1 );

		//Only insert Image tag if the container is empty
		if(containers[nextNo - 1].innerHTML === ""){

			//Injects the active image into the DOM 
			var newImg = doc.createElement('img');
			newImg.classList.add('modal_main_img');
			newImg.src = "img/scrapbook/image"+ nextNo + ".jpg";
			newImg.alt = desc;
			containers[nextNo - 1].appendChild(newImg);

		}

		//Sets the title and description of the active image in the side content area
		currentImageTitle.innerHTML = title;
		currentImageDesc.innerHTML = desc;




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

		var title = scrapbookImages[previousNo].getAttribute('data-title'),
			desc = scrapbookImages[previousNo].getAttribute('data-desc');

		var translateValue = 'translateX(' + (((previousNo - 1) * 100) * -1) + '%)';
		modalImageContainer.style.transform = translateValue;

		previousBtn.setAttribute( 'data-previous', Number(previousNo) - 1 );
		nextBtn.setAttribute( 'data-next', Number(previousNo) + 1 );

		//Only insert Image tag if the container is empty
		if(containers[previousNo - 1].innerHTML === ""){

			//Injects the active image into the DOM 
			var newImg = doc.createElement('img');
			newImg.classList.add('modal_main_img');
			newImg.src = "img/scrapbook/image"+ previousNo + ".jpg";
			//newImg.alt = desc;
			containers[previousNo - 1].appendChild(newImg);

		}

		//Sets the title and description of the active image in the side content area
		currentImageTitle.innerHTML = title;
		currentImageDesc.innerHTML = desc;

	}

	/*var scrapbookClose = doc.getElementById('js-close_scrapbook_container'),
		scrapbookContainer = doc.getElementById('js-scrapbook_container'),
		scrapbookImages = doc.getElementsByClassName('scrapbook_img'),
		scrapbookImageContainer = doc.getElementById('js-scrapbook_img_container');

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