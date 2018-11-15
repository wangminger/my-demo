window.onload = function() {
	var product = document.getElementById("product"),
		bar = document.getElementsByClassName("bar")[0];
	bar.style.left = 22 + "px";

	bar.onmousedown = function(event) {
		var mouspos = event.clientX - bar.offsetLeft,
			move;
		event.stopPropagation();
		document.onmousemove = function(event) {
			move = event.clientX - mouspos;
			move < 0 && (move=0);
			move > 424 && (move=424);
			bar.style.left = move + 22 + "px";
			//product.style.left = -move*3 + "px";
		}
		document.onmouseup = function(event) {
			document.onmousemove = null;
			var ratio = move/424;
			picmove(rang);
		}
	}

	function picmove(ratop) {
		var distance = Math.ceil(ratio*960);

	}
}