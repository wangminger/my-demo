window.onload = function() {
	//变量区
	var userId = document.getElementById("userName"),
		portrait = document.getElementById("face").getElementsByTagName("img"),
		text = document.getElementById("text"),
		sendBtn = document.getElementById("sendBtn");
		portSele=i=j=0;
		list = document.getElementById("list").getElementsByTagName("ul")[0];

	
	//点击图片更换头像
	for (i = 0; i < portrait.length; i++) {
		portrait[i].index = i;
		portrait[i].onclick = function() {
			for (j=0;j<portrait.length;j++) portrait[j].className = "";
			portrait[this.index].className = "current";
			portSele = this.index;
		}
	}
	//广播按钮功能实现
	sendBtn.onclick = function() {
		submitStatus();
		apper()
	}
	//添加鼠标移动到状态添加背景样式功能
	statusHover();
	//添加删除功能
	deleteLi();


/*---------------------------------------------函数区----------------------------------------------*/
	//广播按钮函数
	function submitStatus() {
		userId.value == "" && alert("请输入ID");
		text.value == "" && alert("请出入您的状态");
		if (userId.value && text.value) {
			var li = document.createElement("li");					//列表整体
				userPic = document.createElement("div"),			//头像DIV
				img = document.createElement("img"),				//头像图片
				portLink = "img/face" + (portSele + 1) + ".gif" , 	//头像链接
				content = document.createElement("div"),			//状态DIV
				username = document.createElement("div"),			//ID DIV
				idLink = document.createElement("a"),				//ID链接
				tag = document.createTextNode(":"),
				info = document.createElement("div"),				//状态内容
				time = document.createElement("div"),				//时间DIV
				timeSpan = document.createElement("span"),			//时间内容
				del =document.createElement("a"); 					//删除按钮
			//文档生成
			var now = new Date();
			timeSpan.innerHTML = (now.getMonth()+1) + "月" + now.getDate() + "日" + " " + now.getHours() + ":" +now.getMinutes();
			time.appendChild(timeSpan);

			del.innerHTML = "删除";
			del.setAttribute("href", "javascript:;");
			del.className = "del";
			time.appendChild(del);
			time.className = "time";

			info.innerHTML = text.value;
			info.className = "info";

			idLink.innerHTML = userId.value;
			idLink.setAttribute("href", "javascript:;");
			username.appendChild(idLink);
			username.appendChild(tag);
			username.className = "userName";

			content.appendChild(username);
			content.appendChild(info);
			content.appendChild(time);
			content.className = "content";

			img.setAttribute("src", portLink);
			userPic.appendChild(img);
			userPic.className = "userPic";

			li.appendChild(userPic);
			li.appendChild(content);
			//刚开始添加不显示
			//li.style.display = "none";

			list.insertBefore(li, list.firstChild);

			userId.value = "";
			text.value = "";
			//测试 alert("ID: " + userId.value + ";\n" + "Status:" + text.value);
			statusHover();
		}
	}

	//鼠标滑过状态变幻样式
	function statusHover() {
		var li = list.getElementsByTagName("li"),
			del;
		for(i=0;i<li.length;i++) {
			li[i].index = i;
			li[i].onmouseover = function() {
				li[this.index].className = "hover";
				del = li[this.index].getElementsByClassName("del")[0];
				del.style.display = "block";
				deleteLi();
			};
			li[i].onmouseout = function() {
				li[this.index].className = "";
				del = li[this.index].getElementsByClassName("del")[0];
				del.style.display = "none";
			}
		}
	}

	//点击删除时删除当前状态
	function deleteLi() {
		var del = document.getElementsByClassName("del"),
			list = document.getElementById("list").getElementsByTagName("ul")[0];
		for (i = 0; i < del.length; i++) {
			del[i].index = i;
			del[i].onclick = function(event) {
				delefade(this.index);
			}
		}
	} 

	//删除时，消失动画
	function delefade(n) {
		var cur = list.getElementsByTagName("li")[n],
			opc=100,
			height = cur.offsetHeight,
			top = 0;
		var fade = setInterval(function(){
			opc-=2;
			cur.style.opacity = opc/100;
			opc <=0 && (opc=0, top+=2, cur.style.marginTop = "-" + top + "px");
			if (top>=height) {
				top = height;
				clearInterval(fade);
				list.removeChild(list.childNodes[n]);
				statusHover();
			}
		}, 2);
	}
}

	//添加状态时，渐变动画
	function apper() {
		var li = document.getElementsByTagName("li")[0],
		height = parseInt(document.defaultView.getComputedStyle(li,null).height),
		top=opc=0;
		li.style.height = 0;
		li.style.opacity = 0;
		li.style.display = "block";
		var show = setInterval(function(){
			top+=1;
			if (top<= height) {
				li.style.height = top + "px";
			}else {
				top=height;
				opc+=1;
				li.style.opacity = opc/100;
				opc>=100 && clearInterval(show);
			}
		}, 2);
	}