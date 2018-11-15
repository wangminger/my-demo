var a=1,b=1;
for (var i = 0; i < 5; i++) {
	for (var j=0; j<4; j++) {
		if(a<10) {
			a++;
		} else {
			b++;
			break
		}
	}
}
console.log(a,b)