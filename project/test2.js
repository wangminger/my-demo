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



function simplify(poly) {
	//your code here
	for (var i = 0; i < 2; i++) {
		console.log(i);
	}
	console.log(i);
}

//console.log([1][0])

/*if (true) {
	//let {toString : s} = 123;
	let a =3;
	let b = "落寞的转";
	let show = [];
	for(let i of b) {
		show.push(i);
	}
	let s = 'hello world!'
	let z = '2x+y-3';
	let c = z.split(/[+-]/g);
	console.log(c);
	console.log(s.includes('world!'))
	console.log(show);
	console.log(a.s) 
}*/
/*c = {live: 3}
if(true){
	let live =4;
	const cat = {
		live: 8,
		a : ()=> {this.live--}
	}
	cat.a()
	console.log(cat.live)
}*/
/*function test() {
	live = 100;
	const cat = {
		live: 8,
		jump: ()=> {this.live--}
	}
	const tac = {
		live: 18,
		dump: function() {this.live--}
	}
	cat.jump();
	tac.dump();
	console.log(cat.live)
	console.log(tac.live)
}
test()*/

function mix(s1, s2) {
	//your code
	var arr1 = s1.split('').filter(val => {
		if (val.charCodeAt() >= 97 && val.charCodeAt() <= 122) return val;
	});
	var arr2 = s2.split('').filter(val => {
		if (val.charCodeAt() >= 97 && val.charCodeAt() <= 122) return val;
	});
	var arr1keysval = {};
	var arr2keysval = {};
	arr1.forEach(attr => {
		if (Object.keys(arr1keysval).includes(attr)) {
			arr1keysval[attr]++;
		} else {
			arr1keysval[attr] = 1;
		}
	});
	arr2.forEach(attr => {
		if (Object.keys(arr2keysval).includes(attr)) {
			arr2keysval[attr]++;
		} else {
			arr2keysval[attr] = 1;
		}
	});

	//校对s1和s2的字符串
	var arr1keys = Object.keys(arr1keysval);
	var arr2keys = Object.keys(arr2keysval);
	var arrResult = {};
	arr1keys.forEach(key => {
		if (arr1keysval[key] === 1) {
			return;
		} else {
			arrResult[key] = [arr1keysval[key], 1];
		}
	});
	arr2keys.forEach(key => {
		if (arrResult[key] !== undefined) {
			arrResult[key] = arrResult[key][0] - arr2keysval[key] > 0 ? arrResult[key] : (arrResult[key][0] === arr2keysval[key] ? [arr2keysval[key], '='] : [arr2keysval[key], 2]);
		} else {
			if (arr2keysval[key] === 1) {
				return
			} else {
				arrResult[key] = [arr2keysval[key], 2];
			}
		}
	});

	//输出结果
	var result = '';
	for(let i in arrResult) {
		result += arrResult[i][1] + ':' + i.repeat(arrResult[i][0]) + '/'
	}


	console.log(result)
	console.log(arrResult)
	console.log(arr1keys);
	console.log(arr2keys);
	console.log(arr1keysval);
	console.log(arr2keysval);
}
mix("Are they here", "yes, they are here")

/*var a = {
	foo: '123',
	asd: '34123'
}
a.foo++
	console.log(a.foo)
//console.log('z'.charCodeAt())*/