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


	$('.logo').on('click', function() {
		$('.paginate')[0].click()
	});

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


	// ADAPTIVE VIDEO

	$(window).resize(resizeVideo);

	function resizeVideo() {
		if ($(window).width()/$(window).height() < 1.777) {
			if(!$('video').hasClass('height-align')) {
				$('video').addClass('height-align');
			}
		} else {
			if($('video').hasClass('height-align')) {
				$('video').removeClass('height-align');
			}
		}
	}
	resizeVideo();


	// FORM SENDING

	$('#frmContact .submit').on('click', sendContact);

	function sendContact() {
		var valid;
		valid = validateContact();
		if(valid) {
			jQuery.ajax({
				url: "contact_mail.php",
				data:'userName='+$("#firstName").val()+' '+$("#lastName").val()+'&userEmail='+$("#userEmail").val()+'&subject='+$("#subject").val()+'&content=('+$('#phone').val()+')'+$('#content').val(),
				type: "POST",
				success:function(data){
					swal("You just sent your email", "We will answer you in 24 hours", "success")
				},
				error:function (){}
			});
		}
	}

	function validateContact() {
		var valid = true;
		$("#frmContact > *").removeClass('invalid');
		$(".info").html('');

		if(!$("#firstName").val()) {
			$("#firstName").addClass('invalid');
			valid = false;
		}
		if(!$("#lastName").val()) {
			$("#lastName").addClass('invalid');
			valid = false;
		}
		if(!$("#userEmail").val()) {
			$("#userEmail").addClass('invalid');
			valid = false;
		}
		if(!$("#phone").val()) {
			$("#phone").addClass('invalid');
			valid = false;
		}
		if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
			$("#userEmail").addClass('invalid');
			valid = false;
		}
		if(!$("#subject").val()) {
			$("#subject").addClass('invalid');
			valid = false;
		}
		if(!$("#content").val()) {
			$("#content").addClass('invalid');
			valid = false;
		}

		return valid;
	}


	// MODALS

	$('.projects-list a').on('click', function () {
		$('.overlay').fadeIn(400);
		$('.modal ').fadeIn(400);
		$('.modal').removeClass('zoomOut');
		$('.modal').addClass('zoomIn').addClass('animated');
		
		$('.modal-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true
		});
	});

	$('.modal .close').on('click', function () {
		$('.overlay').fadeOut(400);
		$('.modal ').fadeOut(400);
		$('.modal').removeClass('zoomIn');
		$('.modal').addClass('zoomOut').addClass('animated');
	});

	$('.project-1').on('click', function () {
		$('.modal-wrapper').load('G2-project.html');
		$('.modal header h3').text('IT and Database Consulting for Marketing G2: A decade long technical partnership');
		$('.modal footer a').attr('href', 'pdf/Case Study_MarketingG2_v1.pdf');
	});
	
	$('.project-2').on('click', function () {
		$('.modal-wrapper').load('sc-project.html');
		$('.modal header h3').text('IT and Database Consulting for SolarCity : America’s #1 source for solar power');
		$('.modal footer a').attr('href', 'pdf/Case Study_SolarCity_v1.pdf');
	});
	
	$('.project-3').on('click', function () {
		$('.modal-wrapper').load('gov-project.html');
		$('.modal header h3').text('IT and Database Consulting Services for GOVGISTICS : Managing 5K New Gov.’t Contracts Daily');
		$('.modal footer a').attr('href', 'pdf/Case Study_Govgistics_v1.pdf');
	});
	
	$('.project-4').on('click', function () {
		$('.modal-wrapper').load('partbase-project.html');
		$('.modal header h3').text('IT and Database Consulting Services for PartsBase.com');
		$('.modal footer a').attr('href', 'pdf/Case Study_PartsBase_v1.pdf');
	});
	
	$('.project-5').on('click', function () {
		$('.modal-wrapper').load('sl-project.html');
		$('.modal header h3').text('Complete Product Development for SeekingLeads.com : From Napkin to Launch in 5 month');
		$('.modal footer a').attr('href', 'pdf/Case Study_SeekingLeads_v1.pdf');
	});

})();