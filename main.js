$(document).ready(function () {

	var img = $('.landingpic').attr('src');
	console.log(img);
	var mq = window.matchMedia("(min-width:700px)")
	if (mq.matches) {
		if (img == "images/astrolanding") {
			var newImg = img + ".png";
		} else {
			var newImg = img + ".jpg";
		}
		$('.landingpic').attr('src', newImg);
	} else {
		var newImg = img + "-sm.jpg";
		$('.landingpic').attr('src', newImg);
	}
	
	$.getScript("node_modules/autosize/dist/autosize.js", function () {
		autosize(document.querySelector('textarea'));
	});

	$(function () {
		$('a[class="lightbox"]').fluidbox();
	})

	$('a').fluidbox({
		viewportFill: 0.8,
		maxWidth: 925,
		loader: true
	})
});