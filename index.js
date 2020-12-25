var starsChecked = 0;

$("#stars > label")
	.hover(function (event) {
		const starHovered = event.target.id.replace("label-star", "");
		for (i = 1; i <= starHovered; i++) {
			$("#label-star" + i).toggleClass("hovered");
		}
	})
	.click(function (event) {
		starsChecked = event.target.id.replace("label-star", "");
    for (i = 1; i <= 5; i++) {
      $("#star" + i).prop("checked", false);
    }
		for (i = 1; i <= starsChecked - 1; i++) {
			$("#star" + i).prop("checked", true);
		}
	});

$("#stars").submit(function (event) {
  event.preventDefault();
  alert(starsChecked + "stars checked.");
})