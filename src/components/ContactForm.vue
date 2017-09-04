<template>
	<section id="contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="wow tada">CONTACT ME</h2>
					<h3>This form delivers to a low priority inbox.</h3>
				</div>
			</div>
		   <div class="row">
			  <form name="simple_form" id="simple_form" action="http://komasurfer.com/contact.php" enctype="multipart/form-data" method="post">
				<div class="col-md-6">
	              <div id="simple_form-name">
					<div class="form-group">
						<input type="text" id="simple_form-field-name" name="name" class="form-control" placeholder="Add your name" value="" required="required">
			            <p class="help-block text-danger"></p>
					</div>
				</div>
	            <div id="simple_form-email">
					<div class="form-group">
						<input type="email" id="simple_form-field-email" name="email" class="form-control" placeholder="Add your email" value="" required="required">
						<p class="help-block text-danger"></p>
					</div>
				</div>
	      </div>
			<div class="col-md-6">
	          <div id="simple_form-message">
					<div class="form-group">
						<textarea id="simple_form-field-message" name="message" class="form-control" placeholder="Add your message" required="required"></textarea>
						<p class="help-block text-danger"></p>
					</div>
				</div>
	      </div>
	  <div class="clearfix"></div>
	  <div class="col-lg-12 text-center">
	    <div id="simple_form-success"></div>
				<div id="simple_form-submit">
					<div class="form-group">
					<button id="simple_form-field-submit" name="submit" class="btn btn-primary btn-lg">Submit</button>
					</div>
				</div>
	      </div>
	</form>
	          </div>
	  </div>
	</section>
</template>

<script>
$(function () {

	var securitytoken = false,
		dateline = Math.floor(Date.now() / 1000);

	//get security token
	$.ajax({
		dataType: 'text',
		method: "POST",
		url: "./token.php",
		data: {
			d: dateline
		}
	}).done(function (msg) {
		if (msg) {
			securitytoken = msg;
		}
	});

	/*form submission*/
	$('#simple_form-field-submit').click(function (e) {
		e.preventDefault();
		if (!securitytoken) {
			return;
		}
		$.ajax({
			dataType: 'text',
			url: "http://komasurfer.com/contact" + "." + "php",
			data: {
				'token': securitytoken,//need that token
				'name': $("#simple_form-field-name").val(),
				'email': $("#simple_form-field-email").val(),
				'message': $("#simple_form-field-message").val(),
				'dateline': dateline
			}
		}).done(function () {
			$('#simple_form-success').html("<div class='alert alert-success'>");
			$('#simple_form-success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
			$('#simple_form-success > .alert-success').append("<strong>Your message has been sent.</strong>");
			$('#simple_form-success > .alert-success').append('</div>');

			//clear all fields
			//$('#simple_form').trigger("reset");

			$('.form-group').remove();
		});
		return false;
	});//$('#simple_form-field-submit').click

});

export default {
}
</script>

<style>
</style>

