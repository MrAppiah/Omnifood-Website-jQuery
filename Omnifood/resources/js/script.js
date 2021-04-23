/* global $ */
/* eslint-env jquery */
$("document").ready(function () {
	/* For the sticky navigation */
	$(".js--section-features").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		},
		{
			offset: "60px;",
		}
	);

	/* Scroll on buttons */
	$(".js--scroll-to-plans").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-plans").offset().top },
			500
		);
	});

	$(".js--scroll-to-start").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-features").offset().top },
			500
		);
	});

	/* Navigation scroll completed in css */

	/* Animations on scroll completed in html/css */

	/* Mobile nav */
	$(".js--nav-icon").click(function () {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon i");

		nav.slideToggle(200);
		if (icon.hasClass("ion-navicon-round")) {
			icon.addClass("ion-close-round");
			icon.removeClass("ion-navicon-round");
		} else {
			icon.addClass("ion-navicon-round");
			icon.removeClass("ion-close-round");
		}
	});
});
