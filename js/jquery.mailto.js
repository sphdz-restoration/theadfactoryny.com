/* safer mailto link */

jQuery.fn.mailto = function() {
	return this.each(function(){
		var email = $(this).attr('href').replace(/\s*\(.+\)\s*/, "@");
		$(this).attr('href', 'mailto:'+email+'');
	});
};