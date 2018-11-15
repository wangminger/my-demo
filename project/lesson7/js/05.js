 window.onload = function() {
 	var btn = document.getElementsByTagName("input"),
 		pic = document.getElementsByTagName("div")[0],
 		description = document.getElementsByTagName("p")[0],
 		disp = btn[0],
 		trace = btn[1],
 		dmove = tmove = null,
 		dispact = tract = drag = false;

 	disp.onclick = function(event) {
 		clearEvent();
 		pic.style.cssText == "" ? pic.style.cssText = "top:100px; left:50px;" : "";
 		disp.value = "根据鼠标点击位置移动(已激活)";
 		trace.value = "根据鼠标轨迹移动";
 		description.innerHTML = "鼠标点击页面，人物移动到鼠标位置";
 		dispact = true;
 		tract = false;
 		event.stopPropagation();
 		displacement();
 	}

 	trace.onclick = function(event) {
 		clearEvent();
 		pic.style.cssText == "" ? pic.style.cssText = "top:100px; left:50px;" : "";
 		disp.value = "根据鼠标点击位置移动";
 		trace.value = "根据鼠标轨迹移动(已激活)";
 		description.innerHTML = "按住鼠标左键，在页面划动，人物将按照鼠标轨迹移动";
 		tract = true;
 		dispact = false;
 		event.stopPropagation();
 		retrace();
 	}

 	function displacement() {
 		if (!dispact) return;
 		document.onclick = function(event) {
 			clearInterval(dmove)
 			var pos = {
 					x: event.clientX,
 					y: event.clientY
 				},
 				dx = dy = 0,
 				curX, curY;
 			pic.style.background = "url(img/2.gif) no-repeat";
 			dmove = setInterval(function() {
 				curX = parseInt(pic.style.left);
 				curY = parseInt(pic.style.top);
 				(curX == pos.x && curY == pos.y) && (clearInterval(dmove), pic.style.background = "url(img/1.gif) no-repeat");
 				curX == pos.x ? "" : (pos.x - curX > 0 ? (dx = Math.ceil((pos.x - curX) / 10), pic.style.left = curX + dx + "px") : (dx = Math.floor((pos.x - curX) / 10), pic.style.left = curX + dx + "px"));
 				curX == pos.Y ? "" : (pos.y - curY > 0 ? (dy = Math.ceil((pos.y - curY) / 10), pic.style.top = curY + dy + "px") : (dy = Math.floor((pos.y - curY) / 10), pic.style.top = curY + dy + "px"));
 				console.log(1);
 			}, 20);
 		}
 	}

 	function retrace() {

 		if (!tract) return;
 		var pos = [],
 			replay;
 		document.onmousedown = function(event) {
 			drag = true;
 			clearInterval(replay);
 			pos = [{
 				x: event.clientX,
 				y: event.clientY
 			}];
 			document.onmousemove = function(event) {
 				if (drag) pos.push({
 					x: event.clientX,
 					y: event.clientY
 				});
 				return false;
 			}
 			return false;
 		}
 		document.onmouseup = function(event) {
 			document.onmousemove = null;
 			pos.reverse();
 			replay = setInterval(function() {
 				pic.style.background = "url(img/2.gif) no-repeat";
 				pic.style.left = pos[pos.length - 1].x + "px";
 				pic.style.top = pos[pos.length - 1].y + "px";
 				pos.pop();
 				//console.log(pos);
 				pos.length < 1 && (clearInterval(replay), drag = false, pic.style.background = "url(img/1.gif) no-repeat");
 			}, 30);
 		}
 	}

 	function clearEvent() {
 		document.onclick = null;
 		document.onmousedown = null;
 		document.onmousemove = null;
 		document.onmouseup = null;
 		for (var i = 0; i < btn.length; i++) {
 			btn[i].onmousedown = btn[i].onmouseup = function(event) {
 				event.stopPropagation();
 			}
 		}
 	}
 }



 /*window.onload = function ()
 {
 	var oDiv = document.getElementsByTagName("div")[0];
 	var aInput = document.getElementsByTagName("input");
 	var oP = document.getElementsByTagName("p")[0];
 	var i = 0;
 	
 	aInput[0].onclick = function (event)
 	{		
 		(event || window.event).cancelBubble = true;
 		clearEvent();
 		this.value += "(已激活)";
 		oP.innerHTML = "鼠标点击页面， 人物将移动至鼠标位置！";
 		document.onclick = function (event)
 		{
 			var event = event || window.event;
 			oDiv.style.background = "url(img/2.gif) no-repeat";
 			startMove(oDiv, {x:event.clientX, y:event.clientY}, function(){oDiv.style.background = "url(img/1.gif) no-repeat"});
 			return false;
 		}	
 	};
 	
 	aInput[1].onclick = function (event)
 	{		
 		(event || window.event).cancelBubble = true;
 		clearEvent();
 		this.value += "(已激活)";
 		oP.innerHTML = "按住鼠标左键，在页面划动，人物将按照鼠标轨迹移动。"
 		var aPos = [{x:oDiv.offsetLeft, y:oDiv.offsetTop}];
 		document.onmousedown = function (event)
 		{
 			var event = event || window.event;			
 			aPos.push({x:event.clientX, y:event.clientY});
 			document.onmousemove = function (event)
 			{
 				var event = event || window.event;
 				aPos.push({x:event.clientX, y:event.clientY});	
 				return false;
 			}
 			return false;
 		}
 		document.onmouseup = function ()
 		{
 			document.onmousemove = null;
 			oDiv.style.background = "url(img/2.gif) no-repeat";		
 			var timer = setInterval(function ()
 			{
 				if(aPos.length == 0)
 				{
 					clearInterval(timer);
 					oDiv.style.background = "url(img/1.gif) no-repeat";
 					return;	
 				};
 				oDiv.style.left = aPos[0].x + "px";
 				oDiv.style.top = aPos[0].y + "px";
 				aPos.shift();
 			}, 30);
 		};
 	}
 	
 	function clearEvent()
 	{
 		document.onclick = null;
 		document.onmousedown = null;
 		document.onmousemove = null;
 		document.onmouseup = null;
 		for (i = 0; i < aInput.length; i++)
 		{
 			aInput[i].value = aInput[i].value.replace("(已激活)", "");
 			aInput[i].onmousedown = aInput[i].onmouseup = function (event)
 			{
 				(event || window.event).cancelBubble = true;	
 			};
 		}
 	}
 };
 function startMove(obj, oTarget, fnEnd)
 {
 	clearInterval(obj.timer);
 	obj.timer = setInterval(function ()
 	{
 		doMove(obj, oTarget, fnEnd)	
 	}, 30)	
 }
 function doMove(obj, oTarget, fnEnd)
 {
 	var iX = (oTarget.x - obj.offsetLeft) / 5;
 	var iY = (oTarget.y - obj.offsetTop) / 5;
 	iX = iX > 0 ? Math.ceil(iX) : Math.floor(iX);
 	iY = iY > 0 ? Math.ceil(iY) : Math.floor(iY);
 	if (oTarget.x == obj.offsetLeft && oTarget.y == obj.offsetTop)
 	{
 		clearInterval(obj.timer);
 		fnEnd && fnEnd();	
 	}
 	else
 	{
 		obj.style.left = obj.offsetLeft + iX + "px";
 		obj.style.top = obj.offsetTop + iY + "px";	
 	}
 }*/