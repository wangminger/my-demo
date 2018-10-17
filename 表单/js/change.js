function change() {
	var textbox = document.forms[0].elements[0];
	textbox.addEventListener("focus", function(event) {
		var target = event.target;
		if (target.style.backgroundColor != "red") {
			target.style.backgroundColor = "yellow";
		}
	}, false);

	textbox.addEventListener("blur", function(event) {
		var target = event.target;
		if(/[^\d]/.test(target.value)) {
			target.style.backgroundColor = "red";
		}
		else {
			target.style.backgroundColor = "";
		}
	}, false);

	textbox.addEventListener("change", function(event) {
		var target = event.target;
		if (/[^\d]/.test(target.value)) {
			target.style.backgroundColor = "red";
		}
		else {
			target.style.backgroundColor = "";
		}
	}, false);
}
function tishi() {
	/*var forms = document.forms[0].elements[0];
	alert(forms.name);*/
	/*var textbox = document.forms[0].elements["select"];
	textbox.addEventListener("select", function(event) {
		alert("Text selected " + textbox.value);
	}, false);*/

	var textbox = document.forms[0].elements["textbox1"];
	alert(textbox.value);
	textbox.addEventListener("select", function(event) {
		alert("Text selected " + textbox.value);
	}, false);
}

function getSelectedText(textbox) {
	return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
}

window.onload = function() {
	change();
	tishi(); 
}

