var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
//移除最后一项
arr.pop()
//console.log(arr)
// 加入到最后一项
arr.push(12)
//console.log(arr)
//移除第一项
arr.shift()
//console.log(arr)
//从第一项添加
arr.unshift(1)
//console.log(arr)

//使用迭代方法扩充数组容量，并将数组值复制、
/*var r = arr.filter(function(a){return arr.push(a)})
console.log(arr)*/

// 用方法操作数组项

//var t = arr.slice(2,10)
//console.log(t)

var s = arr.splice(2,2,5,10,12)
console.log(arr)
console.log(s)

var u = arr.every(function(a){return arr.push(1);})
console.log(arr)

var v = arr.map(function(a){return a+=1})
console.log(v)