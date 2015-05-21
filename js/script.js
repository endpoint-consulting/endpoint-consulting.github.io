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
		scrollToEl(sections[0].element);
		setActive(sections[0].menuItem);
	});
	sections[1].menuItem.on('click', function() {
		scrollToEl(sections[1].element);
		setActive(sections[1].menuItem);
	});
	sections[2].menuItem.on('click', function() {
		scrollToEl(sections[2].element);
		setActive(sections[2].menuItem);
	});
	sections[3].menuItem.on('click', function() {
		scrollToEl(sections[3].element);
		setActive(sections[3].menuItem);
	});
	

	function scrollToEl(element) {
		$('html, body').animate({
			scrollTop: ($(element).first().offset().top - 66)
		},500);
	}

	function setActive(element) {
		$('.main-menu li').removeClass('active');
		element.addClass('active');
	}
})();