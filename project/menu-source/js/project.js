function clickExpansion() {
	var doc = document,
		dl = doc.getElementsByTagName("dl");

	//获取所有表头并添加事件
	for (var i = 0; i < dl.length; i++) {
		dl[i].addEventListener("click", function(n) {
			return function() {
				if (dl[n].className == "sheetoff") {
					dl[n].className = "sheeton";
				} else {
					dl[n].className = "sheetoff";
				}
			}
		}(i), false);
	}
}
window.onload = function() {
	clickExpansion();
};