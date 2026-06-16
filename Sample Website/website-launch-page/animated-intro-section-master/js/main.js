jQuery(document).ready(function($){
	//this is used for the video effect only
	if( $('.cd-bg-video-wrapper').length > 0 ) {
		var videoWrapper = $('.cd-bg-video-wrapper'),
			mq = window.getComputedStyle(document.querySelector('.cd-bg-video-wrapper'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if( mq == 'desktop' ) {
			// we are not on a mobile device 
			var	videoUrl = videoWrapper.data('video'),
				video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
			video.appendTo(videoWrapper);
			video.get(0).play();
		}
	}
});

let toggle = 0;
function dropDownMenuClick() {
	if (toggle == 0){
		document.getElementById("handles-op").style.cssText = 'display: flex; opacity: 100%; top: 0rem;';
		toggle = 1;
	}

	else{
		document.getElementById("handles-op").style.cssText = 'opacity: 100%; transform; translateY(-20rem);';
		toggle = 0;
	}
}