(function(){
	"use strict";

	var bigDay = new Date(2015, 5, 1);

	setInterval(check, 100);

	function tick(target, val) {
		$(target).html('<div class="num animated fadeOutDown">'+(val+1)%10+'</div><div class="num animated fadeInDown">'+val+'</div>');
	}

	function getSeconds(time) {
		return Math.floor((time % (60 * 1000)) / (1000));
	}

	function getMinutes(time) {
		return Math.floor((time % (3600 * 1000)) / (60 * 1000));
	}

	function getHours(time) {
		return Math.floor((time % (3600 * 24 * 1000)) / (3600 * 1000));
	}

	function getDays(time) {
		return Math.floor((time)/(3600 * 24 * 1000));
	}

	function check() {
		var now = Date.now();

		var bigDay = new Date(2015, 5, 1);

		var distance = bigDay - now;

		var days = getDays(distance);
		var hours = getHours(distance);
		var minutes = getMinutes(distance);
		var seconds = getSeconds(distance);

		var daysNew1 = Math.floor(days / 10);
		var daysNew2 = days % 10;

		var hoursNew1 = Math.floor(hours / 10);
		var hoursNew2 = hours % 10;

		var minutesNew1 = Math.floor(minutes / 10);
		var minutesNew2 = minutes % 10;

		var secondsNew1 = Math.floor(seconds / 10);
		var secondsNew2 = seconds % 10;

		if (daysNew1 !== days1) {
			tick('.days1', daysNew1);
			days1 = daysNew1;
		}

		if (daysNew2 !== days2) {
			tick('.days2', daysNew2);
			days2 = daysNew2;
		}

		if (hoursNew1 !== hours1) {
			tick('.hours1', hoursNew1);
			hours1 = hoursNew1;
		}

		if (hoursNew2 !== hours2) {
			tick('.hours2', hoursNew2);
			hours2 = hoursNew2;
		}

		if (minutesNew1 !== minutes1) {
			tick('.minutes1', minutesNew1);
			minutes1 = minutesNew1;
		}

		if (minutesNew2 !== minutes2) {
			tick('.minutes2', minutesNew2);
			minutes2 = minutesNew2;
		}

		if (secondsNew1 !== seconds1) {
			tick('.seconds1', secondsNew1);
			seconds1 = secondsNew1;
		}

		if (secondsNew2 !== seconds2) {
			tick('.seconds2', secondsNew2);
			seconds2 = secondsNew2;
		}
	}

	var now = Date.now();

	var distance = bigDay - now;

	var days = getDays(distance);
	var hours = getHours(distance);
	var minutes = getMinutes(distance);

	var days1 = Math.floor(days / 10);
	var days2 = days % 10;

	var hours1 = Math.floor(hours / 10);
	var hours2 = hours % 10;

	var minutes1 = Math.floor(minutes / 10);
	var minutes2 = minutes % 10;

	var seconds1 = Math.floor(seconds / 10);
	var seconds2 = seconds % 10;

	$('.days1 .num').html(days1);
	$('.days2 .num').html(days2);
	$('.hours1 .num').html(hours1);
	$('.hours2 .num').html(hours2);
	$('.minutes1 .num').html(minutes1);
	$('.minutes2 .num').html(minutes2);
	$('.seconds1 .num').html(seconds1);
	$('.seconds2 .num').html(seconds2);
})();