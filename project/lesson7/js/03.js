window.onload = function() {
	var show = document.getElementById("show"),
		order = document.getElementById("index").getElementsByTagName("li"),
		i,
		cur = 0,
		play, change,
		rank = true;
	//添加当鼠标移动到序号时，更改序号的颜色背景。
	for (i = 0; i < order.length; i++) {
		order[i].index = i;
		order[i].onmouseover = function() {
			clearInterval(play);
			clearInterval(change);
			cur = this.index;
			autoIndex(cur);
			picchange(cur);
		}
		order[i].onmouseout = function() {
			autoplay();
		}
	}
	autoplay();

	function autoplay() {
		play = setInterval(function() {
			console.log(cur + ":" + rank);
			cur >= 4 && (rank = false);
			cur <= 0 && (rank = true);
			rank ? cur++ : cur--;
			//序号切换
			autoIndex(cur);
			picchange(cur);
			//图片切换
		}, 2000);
	}

	function autoIndex(n) {
		for (var j in order) order[j].className = "";
		order[n].className = "current";
	}

	function picchange(target) {
		var coordinate = [0, -170, -340, -510, -680];
		var curPos = 0,
			tarPos = 0,
			dpos = 0;
		clearInterval(change);
		change = setInterval(function() {
			curPos = parseInt(show.style.top);
			tarPos = coordinate[target];
			curPos == tarPos && (clearInterval(change), console.log(tarPos));
			//dpos = tarPos - curPos < 0 ? -10 : (tarPos-curPos ==0 ? 0 : 10);
			dpos=tarPos-curPos < 0 ? Math.floor((tarPos - curPos) / 10) :  Math.ceil((tarPos - curPos) / 10);
			show.style.top = curPos + dpos + "px";
		}, 30);
	}
}



//demo 代码

/*window.onload = function ()
{
	var oBox = document.getElementById("box");
	var oList = oBox.getElementsByTagName("ul")[0];
	var aImg = oBox.getElementsByTagName("img");
	var timer = playTimer = null;
	var index = i = 0;
	var bOrder = true;
	var aTmp = [];
	var aBtn = null;
	
	//生成数字按钮
	for (i = 0; i < aImg.length; i++) aTmp.push("<li>" + (i + 1) + "</li>");
	
	//插入元素
	var oCount = document.createElement("ul");
	oCount.className = "count";
	oCount.innerHTML = aTmp.join("");
	oBox.appendChild(oCount);	
	aBtn = oBox.getElementsByTagName("ul")[1].getElementsByTagName("li");
	
	//初始化状态
	cutover();
	
	//按钮点击切换
	for (i = 0; i < aBtn.length; i++)
	{
		aBtn[i].index = i;
		aBtn[i].onmouseover = function ()
		{
			index = this.index;
			cutover()
		}
	}
	
	function cutover()
	{
		for (i = 0; i < aBtn.length; i++) aBtn[i].className = "";
		aBtn[index].className = "current";			
		startMove(-(index * aImg[0].offsetHeight))
	}
	
	function next()
	{
		bOrder ? index++ : index--;
		index <= 0 && (index = 0, bOrder = true);
		index >= aBtn.length - 1 && (index = aBtn.length - 1, bOrder = false)
		cutover()
	}
	
	playTimer = setInterval(next, 3000);
	
	//鼠标移入展示区停止自动播放
	oBox.onmouseover = function ()
	{
		clearInterval(playTimer)
	};
	
	//鼠标离开展示区开始自动播放
	oBox.onmouseout = function ()
	{
		playTimer = setInterval(next, 3000)
	};
	function startMove(iTarget)
	{
		clearInterval(timer);
		timer = setInterval(function ()
		{
			doMove(iTarget)
		}, 30)	
	}
	function doMove (iTarget)
	{		
		var iSpeed = (iTarget - oList.offsetTop) / 10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);		
		oList.offsetTop == iTarget ? clearInterval(timer) : oList.style.top = oList.offsetTop + iSpeed + "px"
	}
};*/