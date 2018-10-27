window.onload=function ()
{
	var oBox=document.getElementById("box");
	var oH2 = oBox.getElementsByTagName("h2")[0];			//拖拽区
	var oA = oBox.getElementsByTagName("a")[0];				//点击动作回放
	var aSpan = oBox.getElementsByTagName("span");			//span内容
	var disX = disY = 0;									//当前位置
	var dDrag;										//是否拖拽
	var aPos = [{x:oBox.offsetLeft, y:oBox.offsetTop}] 		//坐标
	
	aSpan[1].innerHTML = aPos[0]["y"];
	aSpan[2].innerHTML = aPos[0]["x"];

	oH2.onmousedown = function(event) {
		//鼠标放下，确认拖动状态。计算鼠标与目标的位置关系。
		dDrag = true;
		disX = event.clientX -oBox.offsetLeft;
		disY = event.clientY -oBox.offsetTop;
		this.setCapture && this.setCapture();
	};

	document.onmousemove = function(event) {
		//当鼠标为落下状态时，移动鼠标使得目标移动
		if (dDrag) {
			aSpan[0].innerHTML = "true";
			oBox.style.marginLeft = 0;
			oBox.style.marginTop = 0;			
			oBox.style.left = (event.clientX - disX) + "px";
			oBox.style.top = (event.clientY - disY) + "px";

			//将坐标存储到数组中
			parseInt(oBox.style.left) <= 0 ? oBox.style.left = 0 : "";
			parseInt(oBox.style.top) <= 0 ? oBox.style.top = 0 : "";
			aPos.push({x:oBox.offsetLeft, y:oBox.offsetTop});
			
			//将数据发送到span中
			aSpan[1].innerHTML = oBox.offsetTop;
			aSpan[2].innerHTML = oBox.offsetLeft;
			return false
		}
	}
	oH2.onmouseup = function() {
		dDrag = false;
		aSpan[0].innerHTML = "false";
		oBox.style.left = oBox.offsetLeft;
		oBox.style.top = oBox.offsetTop;
		
	}

	//点击轨迹回放之后，通过定时器读取数组内容，来返回
	oA.onclick = function() {
		var i = aPos.length-1;
		var timer = setInterval(function() {
			aPos.length == 1 && clearInterval(timer);
			oBox.style.left = aPos[i]["x"] + "px";
			oBox.style.top = aPos[i]["y"] + "px";
			aSpan[1].innerHTML = oBox.offsetTop;
			aSpan[2].innerHTML = oBox.offsetLeft;
			aPos.pop();
			console.log(aPos);
			i--; 
		}, 30);
	}
	oA.onmousemove = function() {
		dDrag = false;
	}



	/*oH2.addEventListener("dragstart", function(event){
		oBox.style.left = oBox.offsetLeft;
		oBox.style.top = oBox.offsetTop;
	}, false);*/
};







