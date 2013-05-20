$(document).ready(function() {
  
	$('.nav-button').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});
	
  
});