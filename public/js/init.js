(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

Materialize.fadeInImage('#wallpaper')

/*To animate the timeline */

jQuery(document).ready(function($){
	
	var timelineBlocks = $('.timeline-event'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });

		if(getScrollTop() > 200 && getScrollTop() < 250){
			
			displayToast();
		}
	});

	

	function hideBlocks(blocks, offset) {
		blocks.each(function(){

			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('bounce-in');
		});
	}


	function displayToast(){
		if(document.getElementsByClassName("translucent").length < 1){
			var toastContent = $('<span>Reach out to me on these links!<i class="material-icons">&#xE913;</i></span>');
			Materialize.toast(toastContent, 2000, 'rounded white-text translucent');
		}
		
	}

	function getScrollTop(){
	    if(typeof pageYOffset!= 'undefined'){
	        //most browsers except IE before #9
	        return pageYOffset;
	    }
	    else{
	        var B= document.body; //IE 'quirks'
	        var D= document.documentElement; //IE with doctype
	        D= (D.clientHeight)? D: B;
	        return D.scrollTop;
	    }
	}


});

