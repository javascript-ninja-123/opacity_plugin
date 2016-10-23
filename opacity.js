(function($){

$.fn.opacity = function(options){
	var settings =$.extend({
		"opacity":"1",
		"height":"200px"



	},options);

return this.each(function(){

$(this).hover(function(){



	$(this).animate({
		"opacity":settings.opacity,
		"height":settings.height


	});
},function(){
		$(this).animate({
		"opacity":"0.5",
		"height":"400px"


	});	
});




});

}

})(jQuery);