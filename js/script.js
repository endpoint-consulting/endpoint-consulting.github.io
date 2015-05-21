(function(){
	"use strict"

	var sections = [
		{
			menuItem: $('.home-link'),
			element: $('.slogan')
		},
		{
			menuItem: $('.services-link'),
			element: $('.areas')
		},
		{
			menuItem: $('.projects-link'),
			element: $('.projects')
		},
		{
			menuItem: $('.contacts-link'),
			element: $('.contacts')
		}
	];

	sections[0].menuItem.on('click', function() {
		console.log(0)
		scrollToEl(sections[0].element);
	});
	sections[1].menuItem.on('click', function() {
		console.log(1)
		scrollToEl(sections[1].element);
	});
	sections[2].menuItem.on('click', function() {
		console.log(2)
		scrollToEl(sections[2].element);
	});
	sections[3].menuItem.on('click', function() {
		console.log(3)
		scrollToEl(sections[3].element);
	});
	

	function scrollToEl(element) {
		$('html, body').animate({
			scrollTop: ($(element).first().offset().top - 66)
		},500);
	}
})();