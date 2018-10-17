var EventUtil = {
	addHander : function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		}else if (element.attachEvent) {
			element.attachEvent(    )
		}
	}
}