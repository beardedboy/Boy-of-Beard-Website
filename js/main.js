/*********************************************************
*
*	Navigation
*
*********************************************************/
!function(){"use strict";/*** MAIN NAVIGATION *****************/
var body=document.body,mainMenu=(document.getElementById("js-root"),document.getElementById("js-main_nav")),mainMenuIcon=document.getElementById("js-main_nav_icon"),mainMenuClose=document.getElementById("js-main_nav_close_icon");mainMenuIcon.addEventListener("click",function(event){event.preventDefault(),mainMenu.classList.toggle("main_nav-active"),body.classList.toggle("no_scroll-sm_only")}),mainMenuClose.addEventListener("click",function(event){event.preventDefault(),mainMenu.classList.remove("main_nav-active"),body.classList.toggle("no_scroll-sm_only")})}(),/*********************************************************
*
*	Scrapbook
*
*********************************************************/
function(){"use strict";function toggleModalHide(event){event.preventDefault(),modal.classList.remove("modal-active"),body.classList.remove("no_scroll")}function toggleModalVisible(index){event.preventDefault();var order=scrapbookImages[index].getAttribute("data-order"),title=scrapbookImages[index].getAttribute("data-title"),desc=scrapbookImages[index].getAttribute("data-desc"),containers=doc.getElementsByClassName("modal_img_container");if(""===containers[index].innerHTML){
//Injects the active image into the DOM 
var newImg=doc.createElement("img");newImg.classList.add("modal_main_img"),newImg.src="img/scrapbook/image"+order+".jpg",newImg.alt=desc,containers[index].appendChild(newImg)}
//Sets the data attribute values of the next/previous buttons
previousBtn.setAttribute("data-previous",Number(order)-1),nextBtn.setAttribute("data-next",Number(order)+1);
//Repositions the viewport to the active image
var translateValue="translateX("+-100*(scrapbookImages[index].getAttribute("data-order")-1)+"%)";modalImageContainer.style.transform=translateValue,
//Sets the title and description of the active image in the side content area
currentImageTitle.innerHTML=title,currentImageDesc.innerHTML=desc,
//Active classes added for presentation
modal.classList.add("modal-active"),body.classList.add("no_scroll")}function goForward(){var nextNo=Number(forwardBtn.getAttribute("data-next"));if(!(nextNo>scrapbookImagesLength)){var title=scrapbookImages[nextNo].getAttribute("data-title"),desc=scrapbookImages[nextNo].getAttribute("data-desc"),translateValue="translateX("+100*(nextNo-1)*-1+"%)";
//Only insert Image tag if the container is empty
if(modalImageContainer.style.transform=translateValue,previousBtn.setAttribute("data-previous",Number(nextNo)-1),nextBtn.setAttribute("data-next",Number(nextNo)+1),""===containers[nextNo-1].innerHTML){
//Injects the active image into the DOM 
var newImg=doc.createElement("img");newImg.classList.add("modal_main_img"),newImg.src="img/scrapbook/image"+nextNo+".jpg",newImg.alt=desc,containers[nextNo-1].appendChild(newImg)}
//Sets the title and description of the active image in the side content area
currentImageTitle.innerHTML=title,currentImageDesc.innerHTML=desc}}function goBack(){var previousNo=Number(backBtn.getAttribute("data-previous"));if(0!==previousNo){var title=scrapbookImages[previousNo].getAttribute("data-title"),desc=scrapbookImages[previousNo].getAttribute("data-desc"),translateValue="translateX("+100*(previousNo-1)*-1+"%)";
//Only insert Image tag if the container is empty
if(modalImageContainer.style.transform=translateValue,previousBtn.setAttribute("data-previous",Number(previousNo)-1),nextBtn.setAttribute("data-next",Number(previousNo)+1),""===containers[previousNo-1].innerHTML){
//Injects the active image into the DOM 
var newImg=doc.createElement("img");newImg.classList.add("modal_main_img"),newImg.src="img/scrapbook/image"+previousNo+".jpg",
//newImg.alt = desc;
containers[previousNo-1].appendChild(newImg)}
//Sets the title and description of the active image in the side content area
currentImageTitle.innerHTML=title,currentImageDesc.innerHTML=desc}}/******************************************************
	* 
	* Functionality to show / hide the gallery window 
	*
	******************************************************/
var doc=document,body=doc.body,modal=doc.getElementById("js-modal"),
//Clickable elements
modalBG=(doc.getElementById("js-modal_main_content"),doc.getElementById("js-modal_bg")),modalCloseBtn=doc.getElementById("js-modal_close"),/* Put scrapbook images length into array */
/* querySelectorAll - pg. 49 */
scrapbookImages=doc.querySelectorAll(".scrapbook_img"),scrapbookImagesLength=scrapbookImages.length,modalImageContainer=doc.getElementById("js-modal_gallery_container"),currentImageTitle=doc.getElementById("js-modal_main_sidebar_content_title"),currentImageDesc=doc.getElementById("js-modal_main_sidebar_content_desc"),previousBtn=doc.getElementById("js-modal_main_content-previous_button"),nextBtn=doc.getElementById("js-modal_main_content-next_button");modalBG.addEventListener("click",toggleModalHide,!1),modalCloseBtn.addEventListener("click",toggleModalHide,!1);/* Access length as array and put in variable before using in loop Pg. 44 */
for(var frag=doc.createDocumentFragment(),i=0;scrapbookImagesLength>i;i++){scrapbookImages[i].addEventListener("click",toggleModalVisible.bind(null,i),!1);var span=doc.createElement("span");span.classList.add("modal_img_container"),frag.appendChild(span)}modalImageContainer.appendChild(frag);/******************************************************
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
var forwardBtn=doc.getElementById("js-modal_main_content-next_button"),backBtn=doc.getElementById("js-modal_main_content-previous_button"),containers=doc.getElementsByClassName("modal_img_container");forwardBtn.addEventListener("click",goForward,!1),backBtn.addEventListener("click",goBack,!1)}();
//# sourceMappingURL=main.js.map