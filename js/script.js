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

	// MODAL
	$('.projects-list a').on('click', function () {
		$('.overlay').show();
	});

	$('.modal .close').on('click', function () {
		$('.overlay').hide();
	});

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

})();