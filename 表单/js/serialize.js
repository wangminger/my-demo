function serialize() {
	var parts = [],
		field = null,
		i,
		len,
		j,
		optLen,
		option,
		optValue;
	for (var i = 0; len = form.elements.length; i < len; i++) {
		field = form.elements[i];

		switch(field.type) {
			case "select-one":
			case "select-multiple":

			if (field.name.length) {
				for (var j = 0; optLen = field.option.length; j < optLen; j++) {
					option = field.option[j];
					if (option.selected) {
						optValue = "";
						if (option.hasAttribute) {
							optValue = (option.hasAttribute("value") ? option.value : option.text);
						}
						else {
							optValue = (option.attributes["value"].specified ? option.value : option.text);
						}
						parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
					}
				}
			}
			break;
			case undefined: //字段集
			case "file":    //文件输入
			case "submit":  //提交按钮
			case "reset":   //重置按钮
			case "button":  //自定义按钮
			break;

			case "radio":
			case "checkbox":
				if (!field.checked) {
					break;
				}

			default:

				if (field.name.length) {
					parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
				}
		}
	}
	return parts.join("&");
}