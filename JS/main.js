$(document).mousemove(function(e){
	$('#card-footer-1').css({
		'left' : -e.pageX / 2+1000,
		'top' : -e.pagey / 5,
		// 'top'  : -e.pageY /90 + 200
	});
	$('#kotak').css({
		'left' : -e.pageX / 2+1000,
		'top' : -e.pagey / 5,
		// 'top' : -e.pageX / 100+150,
	});
	$('#bulat').css({
		'left' : -e.pageX / 3.5+1000,
		'top' : -e.pagey / 6,
	});
	$('#bulat2').css({
		'top' : -e.pageX / 2,
		'top' : -e.pageX / 100+200,

	});

	 $('#card-footer-1').css({
		'left' : e.pageX /2,
		// 'top' : e.pageX / 9,
	});