$(document).alton({
    fullSlideContainer: 'full', // Tell Alton the full height container
    singleSlideClass: 'slide', // Tell Alton the full height slide class
    useSlideNumbers: false, // Set to false if you don't want to use pagination
    slideNumbersBorderColor: '#fff', // Set the outside color of the pagination items (also used for active)
    slideNumbersColor: 'transparent', // Set the inner color of the pagination items (not active)
    bodyContainer: 'pageWrapper' // Tell Alton the body class
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
			scrollTop: ($(element).first().offset().top)
		},500);
	}

	function setActive(element) {
		$('.main-menu li').removeClass('active');
		element.addClass('active');
	}

	$('.projects-list a').on('click', function () {
		$('.overlay').show();
	});

	$('.modal .close').on('click', function () {
		$('.overlay').hide();
	});

	// Menu

	function definePage() {
		if ($('.areas').first().offset().top > window.scrollY || window.scrollY === 0) {
			return sections[0].menuItem;
		} else if ($('.projects').first().offset().top > window.scrollY) {
			return sections[1].menuItem;
		} else if ($('.contacts').first().offset().top > window.scrollY) {
			return sections[2].menuItem;
		} else {
			return sections[3].menuItem;
		}
	}

	function changeActive() {
		setActive(definePage());
	}

	$(window).scroll(function () {
		tryToChangeMenu();
		definePage();
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