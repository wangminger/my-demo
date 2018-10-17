window.onload = function() {
	var wrap = document.getElementById("wrap"),
		pic = document.getElementsByClassName("pic")[0].getElementsByTagName("li"),
		list = document.getElementsByClassName("list")[0].getElementsByTagName("li"),
		index = n = 0,
		play = apper = null,
		order = true;

	//图片切换序列号添加鼠标事件
	for (n = 0; n < list.length; n++) {
		list[n].index = n;
		list[n].onmouseover = function() {
			changepic(this.index);
		}
	}
	//鼠标移动到图片上时，停止播放
	wrap.onmouseover = function() {
		clearInterval(play);
	}
	wrap.onmouseout =function() {
		autoplay();
	}
	autoplay();

	//图片切换
	function changepic(a) {
		var opc=0;
		index = a;
		for (var i = 0; i < pic.length; i++) {
			pic[i].style.opacity = "0";
			list[i].className = ""; 
		}
		list[index].className = "cov";
		clearInterval(apper);
		//当类名转换之后再开始计时，防止出现时间偏差
		apper = setInterval(function() {
			opc+=2;
			if (opc>100) {
				opc =100;
			}
			pic[index].style.opacity = opc/100;
				opc==100 && clearInterval(apper);
		},20); 
		console.log(index);
	}

	function autoplay() {
		play = setInterval(function(){
			order ? index++ : index--;
			if (index>=list.length) {
				index = list.length-2;
				order =false;
			} else if (index<=0) {
				index = 0;
				order = true;
			} 
				changepic(index);
		}, 1500);
	}

}