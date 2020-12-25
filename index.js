var starsChecked = 0;

$("#stars > label")
	.hover(function (event) {
		const starHovered = event.target.id.replace("label-star", "");
		for (i = 1; i <= starHovered; i++) {
			$("#label-star" + i).toggleClass("hovered");
		}
	})
	.click(function (event) {
		const starClicked = event.target.id.replace("label-star", "");
		for (i = 1; i <= starClicked - 1; i++) {
			$("#star" + i).prop("checked", true);
		}
	});
