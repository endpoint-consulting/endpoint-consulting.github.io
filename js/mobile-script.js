(function(){
	"use strict"

	$('#frmContact .submit').on('click', sendContact);

	function sendContact() {
		var valid;
		valid = validateContact();
		console.log('tried to send');
		if(valid) {
			console.log('sended');
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