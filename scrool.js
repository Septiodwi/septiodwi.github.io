var posY = 0;
var jarak = 30;

function smoothScroll(id) {

	var target = document.getElementById(id).offsetTop;

	var scrollAnimate = setTimeout(function () {
		smoothScroll(id);
	}, 3)
	posY = posY + jarak;

	if (posY >= target) {
		clearTimeout(scrollAnimate);
		posY = 0;
	} else {
		window.scroll(0, posY)
	}

}
// scroll//
$(window).scroll(function () {
	var nScroll = $(this).scrollTop();

	console.log(nScroll)
})