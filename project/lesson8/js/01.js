/*window.onload = function() {
	var bg = document.getElementById("wrap"),
		slider = document.getElementById("slider").getElementsByTagName("span")[0],
		pos,move,stopos;
		slider.style.left = 0;
	slider.onmousedown = function(event) {
		var strPos = event.clientX;
		//this.setCapture && this.setCapture();
		document.onmousemove = function(event) {
			pos = event.clientX - strPos;
			pos < 0 && (pos =0);
			pos > 265 && (pos = 265, unlock());
			slider.style.left = pos + "px";
			//this.setCapture && this.setCapture();
		}
		//slider.onmouseout = function() {
		//	slider.onmousemove =null;
		//}
	document.onmouseup = function() {
		stopos = pos;
		document.onmousemove = null;
		pos = parseInt(slider.style.left);
		if (pos>130) {
			move = setInterval(function(){
				moveSlider(265, slider);
				//console.log(pos);
				stopos == 265 && (unlock(),clearInterval(move));
			}, 10);
		} else {
			move = setInterval(function() {
				//console.log(pos);
				moveSlider(0, slider);
				stopos == 0 && clearInterval(move);
			},10);
		}
	}
	}

	function unlock() {
		var slider = document.getElementById("slider");
		slider.style.display = "none";
		bg.style.background = "url(img/2.jpg)";
	}
	function moveSlider(target, obj) {
		var dpos;
		 console.log("first is" + stopos);
		stopos > target ? dpos = Math.floor((target-stopos)/10) : dpos = Math.ceil((target-stopos)/10);
		obj.style.left = stopos + dpos + "px";
		stopos = stopos + dpos;
		console.log("current is " + stopos);
	}
	//moveSlider(120,265,slider);
}*/


//答案
window.onload = function ()
{
	var iPhone = document.getElementById("iphone");
	var oLock = document.getElementById("lock");
	var oBtn = oLock.getElementsByTagName("span")[0];
	var disX = 0;
	var maxL = oLock.clientWidth - oBtn.offsetWidth;
	var oBg = document.createElement("img");
	oBg.src = "http://fgm.cc/iphone/2.jpg";//预加载下第二张背景，其它没什么大用。
	oBtn.onmousedown = function (e)
	{
		var e = e || window.event;
		disX = e.clientX - this.offsetLeft;
		
		document.onmousemove = function (e)
		{
			var e = e || window.event;
			var l = e.clientX - disX;
			
			l < 0 && (l = 0);
			l > maxL && (l = maxL);
			
			oBtn.style.left = l + "px";
			
			oBtn.offsetLeft == maxL && (iPhone.style.background = "url("+ oBg.src +")", oLock.style.display = "none");
			return false;
		};
		document.onmouseup = function ()
		{
			document.onmousemove = null;
			document.onmouseup = null;
			oBtn.releaseCapture && oBtn.releaseCapture();
			
			oBtn.offsetLeft > maxL / 2 ?
				startMove(maxL, function ()
				{
					iPhone.style.background = "url("+ oBg.src +")";
					oLock.style.display = "none"
				}) :
				startMove(0)
		};
		this.setCapture && this.setCapture();
		return false
	};
	function startMove (iTarget, onEnd)
	{
		clearInterval(oBtn.timer);
		oBtn.timer = setInterval(function ()
		{
			doMove(iTarget, onEnd)
		}, 30)
	}
	function doMove (iTarget, onEnd)
	{
		var iSpeed = (iTarget - oBtn.offsetLeft) / 5;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		iTarget == oBtn.offsetLeft ? (clearInterval(oBtn.timer), onEnd && onEnd()) : oBtn.style.left = iSpeed + oBtn.offsetLeft + "px"
	}
};