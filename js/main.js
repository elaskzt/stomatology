$(document).ready(function() {

	var wow = new WOW({	mobile: false	});
	wow.init();

	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});

	$('.elas-logo').hover(function() {
		$(this).children('.elas-name').css('fill', '#fff');
		$(this).children('.elas-link').css('fill', '#fff');
	}, function() {
		$(this).children('.elas-name').css('fill', '#71B6E9');
		$(this).children('.elas-link').css('fill', '#71B6E9');
	});

 });

