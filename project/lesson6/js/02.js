window.onload = function() {
	
	var menu = document.getElementsByClassName("first_menu")[0].getElementsByTagName("li"),
		rtmenu = document.getElementById("menu");
	//二级菜单的显示
	for (var i = 0; i < menu.length; i++) {
		menu[i].index = i;
		//menu[i].style.display = "block";
		menu[i].onmouseover = function() {
			var ul = menu[this.index].getElementsByClassName("second_menu");
			ul.length > 0 ? ul[0].style.display = "block" : "";
		}
		menu[i].onmouseout = function() {
			var ul = menu[this.index].getElementsByClassName("second_menu");
			ul.length > 0 ? ul[0].style.display = "none" : "";
		}
	}

	//鼠标右键点击获取菜单
	document.oncontextmenu = function(event) {
		event.preventDefault();
		rtmenu.style.display = "block";
		rtmenu.style.left = (event.clientX) + "px";
		rtmenu.style.top = (event.clientY) + "px";
		console.log(event.clientX + ":" + event.clientY);
	}
	document.onclick = function() {
		rtmenu.style.display = "none";
	}
}