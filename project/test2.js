/*var a=1,b=1;
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
console.log(a,b)*/

//造塔，星星塔
/*function towerBuilder(nFloors) {
	// build here
	var tower = [];
	var star = "";
	var length = nFloors;
	for (let i = 1; i <= nFloors; i++) {
		for (let m=0; m<length-i; m++) {
			star += "-";
		}
		for (let n=0; n<2*i-1;n++) {
			star += "*";
		}
		for (let l=0; l<length-i;l++) {
			star+= "-";
		}
		tower.push(star);
		star = ""
	}
	return tower;
}
console.log(towerBuilder(3))*/



function simplify(poly){
  //your code here
  for (var i = 0; i < 2; i++) {
  	console.log(i);
  }
	console.log(i);
}

console.log([1][0])