$(document).alton({
    fullSlideContainer: 'full',
    singleSlideClass: 'slide',
    useSlideNumbers: true,
    slideNumbersBorderColor: '#fff',
    slideNumbersColor: 'transparent',
    bodyContainer: 'pageWrapper'
});

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
		$('.paginate')[0].click()
	});
	sections[1].menuItem.on('click', function() {
		$('.paginate')[1].click()
	});
	sections[2].menuItem.on('click', function() {
		$('.paginate')[2].click()
	});
	sections[3].menuItem.on('click', function() {
		$('.paginate')[3].click()
	});
	
	function changeActive() {
		if ($('.paginate:nth-child(1)').hasClass('active')) {
			setActive($('.main-menu li:nth-child(1)'));
		}
		if ($('.paginate:nth-child(2)').hasClass('active')) {
			setActive($('.main-menu li:nth-child(2)'));
		}
		if ($('.paginate:nth-child(3)').hasClass('active')) {
			setActive($('.main-menu li:nth-child(3)'));
		}
		if ($('.paginate:nth-child(4)').hasClass('active')) {
			setActive($('.main-menu li:nth-child(4)'));
		}
	}

	function setActive(element) {
		$('.main-menu li').removeClass('active');
		element.addClass('active');
	}

	$(window).scroll(function () {
		tryToChangeMenu();
		changeActive();
	});

	function tryToChangeMenu() {
		if ($('.areas').first().offset().top <= window.scrollY) {
			$('.fixed-header').fadeIn();
		} else {
			$('.fixed-header').fadeOut();
		}
	}

})();