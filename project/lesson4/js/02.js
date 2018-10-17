window.onload = function() {
	var pic = document.getElementsByClassName("pic")[0].getElementsByTagName("li"),
		list = document.getElementsByClassName("list")[0].getElementsByTagName("li"),
		wrap = document.getElementById("wrap")
		index=n=0,
		play=appear=null;

	//切换到第几张图
	function picchange(a) {
			var opc = 0;
			index = a;
			for (var i = 0; i < list.length; i++) {
				list[i].className = "";
			}
			list[index].className = "cov";
			clearInterval(appear);
			
			for (var i = 0; i < pic.length; i++) {
				pic[i].style.cssText = "opacity: 0;";
			}
			appear = setInterval(function(){
				opc+=2;
				opc>100&&(opc =100);
				pic[index].style.opacity = opc/100;
				if (opc>=100) {
					clearInterval(appear);
				}
			}, 20);
			console.log(index); 	
	}

	//鼠标移动到序列号上时，切换到序列号代表的图片
	for(n=0;n<list.length;n++) {
		list[n].index = n;
		list[n].onmouseover = function() {
			picchange(this.index);
		}
	}
	//划过图片区域停止播放
	wrap.onmouseover = function() {
		clearInterval(play);
	}
	//离开图片区域进行播放
	wrap.onmouseout = function() {
		autoplay();
	}
	
	//自动播放
	function autoplay(){
		play = setInterval(function() {
			index++;
			if (index>=pic.length) {
				index=0;
			}
			picchange(index);
		}, 2000);
		//console.log(n);
	}
	autoplay();
}















 	//计数
 	/*var countchange = (function() {
 		var n=0;
 		return function() {
 			n++;
 			if (n>4) {
 				n=0;
 			}
 			return n;
 		}	 
 	})()*/
	
	//-----------------------------
	/*for (var i=0; i<pic.length; i++) {
		pic[i].index = i;
		pic[i].onmouseover = function() {
			clearInterval(play);
			picchange().call(this,this.index);
		};
		pic[i].onmouseout = function() {
			autoplay();
		}
	}
	autoplay();
}*/







/*window.onload = function ()
{
	var oBox = document.getElementById("box");
	var aUl = document.getElementsByTagName("ul");
	var aImg = aUl[0].getElementsByTagName("li");
	var aNum = aUl[1].getElementsByTagName("li");
	var timer = play = null;
	var i = index = 0;	
	
	//切换按钮
	for (i = 0; i < aNum.length; i++)
	{
		aNum[i].index = i;
		aNum[i].onmouseover = function ()
		{
			show(this.index)
		}
	}
	
	//鼠标划过关闭定时器
	oBox.onmouseover = function ()
	{
		clearInterval(play)	
	};
	
	//鼠标离开启动自动播放
	oBox.onmouseout = function ()
	{
		autoPlay()
	};	
	
	//自动播放函数
	function autoPlay ()
	{
		play = setInterval(function () {
			index++;
			index >= aImg.length && (index = 0);
			show(index);		
		},2000);	
	}
	autoPlay();//应用
	
	//图片切换, 淡入淡出效果
	function show (a)
	{
		index = a;
		var alpha = 0;
		for (i = 0; i < aNum.length; i++)aNum[i].className = "";
		aNum[index].className = "current";
		clearInterval(timer);			
		
		for (i = 0; i < aImg.length; i++)
		{
			aImg[i].style.opacity = 0;
			aImg[i].style.filter = "alpha(opacity=0)";	
		}
		
		timer = setInterval(function () {
			alpha += 2;
			alpha > 100 && (alpha =100);
			aImg[index].style.opacity = alpha / 100;
			aImg[index].style.filter = "alpha(opacity = " + alpha + ")";
			alpha == 100 && clearInterval(timer)
		},20);
	}
};*/





























































