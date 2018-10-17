//+++++++++++++++++++++++++++++++++瞬移切换版本+++++++++++++++++++++++++++++++++

/*function moveHandly() {
	var leftbu = document.getElementById("leftbutton");
	var rightbu = document.getElementById("rightbutton");
	var pic = document.getElementById("pic");
	leftbu.addEventListener("click", function() {
		var curpos = parseInt(pic.style.marginLeft);
		if (curpos <= -300) {
			curpos = 100;
		}
		var tarpos = parseInt(curpos) - 100; 
		pic.style.marginLeft = tarpos + "%";
	}, false); 

	//-----------分割线
	rightbu.addEventListener("click", function() {
		var curpos = parseInt(pic.style.marginLeft);
		if (curpos >= 0) {
			curpos = -400
		}
		var tarpos = curpos + 100;
		pic.style.marginLeft = tarpos + "%";
	}, false); 
}

window.onload = moveHandly;*/


//+++++++++++++++++++++++++++++++++平滑切换版本+++++++++++++++++++++++++++++++++

function moveMethod(tarpos) {
	var pic = document.getElementById("pic");
	var curpos = parseInt(pic.style.marginLeft);
	var dlist = 0;
	if (curpos < tarpos) {
		dlist = Math.ceil((tarpos - curpos)/10);
		var timeout = setTimeout(function() {
			curpos = curpos + dlist;
			pic.style.marginLeft = curpos + "%";
			moveMethod(tarpos);
		}, 10);
	}else if (curpos > tarpos) {
		dlist = Math.ceil((curpos-tarpos)/10);
		var timeout = setTimeout(function() {
			curpos = curpos - dlist;
			pic.style.marginLeft = curpos + "%";
			moveMethod(tarpos);
		}, 10);
	}
	else {
		clearTimeout(timeout);
	}	
}

function thing() {
	var leftbutton = document.getElementById("leftbutton");
	var rightbutton = document.getElementById("rightbutton");
	var pic = document.getElementById("pic");
	rightbutton.addEventListener("click", function() {
		var curpos = parseInt(pic.style.marginLeft);
		if (curpos <= -300) {
			curpos = 100;
		}
		var tarpos = curpos - 100;
		moveMethod(tarpos);
	}, false);
	leftbutton.addEventListener("click", function() {
		var curpos = parseInt(pic.style.marginLeft);
		if (curpos >= 0) {
			curpos = -400;
		}
		var tarpos = curpos + 100;
		moveMethod(tarpos);
	}, false);
}
//剩下的问题是如何实现多重点击下还能进行平滑切换，而且不出现位置错误的bug
window.onload = function() {
	thing();
	moveMethod();
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++