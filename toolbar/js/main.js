requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3.min'
	}
});

requirejs(['jquery', 'backtop'], function($, backtop){
	$('#backTop').backtop({
		mode: 'move'
	});


	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'move',
	// 	pos: 100,
	// 	speed: 800
	// });


	// var scroll = new scrollto.ScrollTo({
	// 	dest: 0,
	// 	speed: 800
	// });

	// $('#backTop').on('click', $.proxy(scroll.move,scroll));
	// $(window).on('scroll', function () {
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// // 运动到达顶部
	// function move(){
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 800);
	// }

	// // 直接到达顶部
	// function go(){
	// 	$('html, body').scrollTop(0);
	// }

	// function checkPosition(pos) {
	// 	if($(window).scrollTop() > pos) {
	// 		$('#backTop').fadeIn();
	// 	} else {
	// 		$('#backTop').fadeOut();
	// 	}
	// }
});