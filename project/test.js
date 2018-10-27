
//将数组中任意的字符串按照长度从小到大排列并输出
/*function sortByLength(array) {
	var result = array.sort(function (va1,va2){
		return va1.length - va2.length;
	});
	return result;
}

var test = ["test", "a", "agdsg", "asdrgsdgz32"];
console.log(sortByLength(test));

var s = [1,2,7,6,5,4,3,8,9]
console.log(s.sort())
*/

/*var a = "azAZ";
var b = a.match(/[a-z]/gi);
for(var i in b) {
	console.log(b[i]);
	console.log(b[i].charCodeAt() );
}*/

//console.log(String.fromCharCode(129,114,128,129));

//任意输入字母组合，输出该字母移位13后的结果，超过26则从a开始。
/*function rot13(message){
  //your code here
  var strArr = message.match(/[a-z]/gi), 
      strindex,
      newstr = [];
  for (var i in strArr) {
    if(strArr[i].charCodeAt()>=65 && strArr[i].charCodeAt() <=90) {
      strindex = strArr[i].charCodeAt() + 13 > 90 ? strArr[i].charCodeAt()-13 : strArr[i].charCodeAt() +13;
      newstr.push(String.fromCharCode(strindex));
    } else if (strArr[i].charCodeAt()>=97 && strArr[i].charCodeAt() <=122) {
      strindex = strArr[i].charCodeAt() + 13 > 122 ? strArr[i].charCodeAt()-13 : strArr[i].charCodeAt() +13;
      newstr.push(String.fromCharCode(strindex));
    }
  }
  return newstr.join("");
}
console.log(rot13("sacfq"));
*/

//输入含三个数值的数组，返回该数组中数值在中间的数的位置。
/*var gimme = function (inputArray) {
  // Implement this function
  var a = inputArray.concat();
  return inputArray.indexOf(a.sort(function(va1,va2) {return va1-va2;})[1]);
};
console.log([5,10,14].sort(function(va1,va2) {
	return va1-va2;
}))
console.log(gimme([5,10,14]))
*/

//获取从m-n之间的特定数值，该数值所有约数的平方和开根号取值后是一个整数。
/*function listSquared(m, n) {
    // your code
    var divisor = [],
        squsum,
        result = [];
    for (var i = m; i <= n; i++) {
        for (var j = i; j > 0; j--) {
            if (i % j == 0) {
                divisor.push(j);
            }
        }
        
        squsum = divisor.reduce(function(a, b) {
            return a + Math.pow(b, 2);
        }, 0);
        if (Math.sqrt(squsum) % 1 == 0) {
            result.push([i, squsum]);
            divisor = [];
        } else {
            divisor = []
            continue;
        }
    }
    return result;
}
console.log(listSquared(1,250))
*/


/*var x = 20;
var re =[];
for (var i=1;i<20;i++ ) {
  for(var j=i; j>0; j--) {
    if (i%j == 0 ) {
      re.push[j];
    }
  
}
console.log(re);
console.log(8%4)*/

// 匹配参数的字符串，并从左到右依次输出长度与输入字符串位置相同的字符串
/*function accum(s) {
  var content = s.match(/[a-z]/gi), result = [], tran =[];
  for (var i in content) {
    result.push(content[i].toUpperCase() + content[i].toLowerCase().repeat(i));
  }
  return result.join("-");
}
console.log(accum("asdwfwwq2"))
*/

//输入任意数字，将其每位上的数字重新排列并输出。
/*function descondOrder(n) {
  var num = n.toString().match(/\d/gi);
  return parseInt(num.sort(function(a,b) {return b-a}).join(""));
}
var j = 1214123
console.log(String(j).split(""));
*/


//多位数，位上的位数+p次幂之和除以本位数要能除尽
/*function digPow(n,p) {
  var numarr = String(n).split(""),
      result,
      sum=0;
  for (var i = 0; i < numarr.length; i++) {
    sum += Math.pow(parseInt(numarr[i]), i+p)
  }
  return sum%n ==0 ? sum/n : -1;
}*/
//console.log(digPow(46288,3))  测试用
/*var a = [1,2,2,3,4,54];

  console.log(a[2].index)*/


// 数字，每位数字的位数次方和相加为数字本身
/*function sumDigPow(m,n) {
  var num, numarr,sum=0,result=[];
  for(var i = m; i <= n; i++) {
    numarr = String(i).split("");
    for (var j = 0; j < numarr.length; j++) {
      sum+= Math.pow(parseInt(numarr[j]),j+1);
    }
    console.log(sum)
    if (sum == i) {
      sum=0;
      result.push(i);
    }
    else {
      sum =0;
      continue;
    }
  }
  return result;
}
console.log(sumDigPow(1,200));
*/

//*未完成，使用正则表达式匹配密码，至少6位，包含数字，字母小写和字母大写每种至少一个。
/*function validate(password) {
  return /^([0-9a-zA-Z]){6,}$/.test(password);
}
console.log(validate("1assssss"))
*/


//给两个由字符串表示的整数，返回两数之和
/*function sumString(a,b) {
  return (parseInt(a) + parseInt(b)).toString();
}
console.log(sumString('1','2'))
console.log(0=="")*/

//对两个数字进行加法计算，该计算可以超过整数精度
/*function sumStrings(a,b) {
  var aarr = a.split(''),
      barr = b.split(''),
      shortlen=null,longlen=null,
      sum=0,
      result =[],
      dec=0,
      diff=0,
      anum=aarr.concat(),bnum=barr.concat();
  for(var j in aarr) {
    if (aarr[j]=='0') {
      anum.shift();
      continue;
    }
    break;
  }
  for(var k in barr) {
    if (barr[k]=='0') {
      bnum.shift();
      continue;
    }
    break;
  }
  anum.length >= bnum.length ? (longlen=anum, shortlen = bnum) : (longlen=bnum, shortlen =anum);
  diff = longlen.length-shortlen.length;
  for (var i = longlen.length-1; i >= 0 ; i--) {
    sum = i-diff < 0 ? parseInt(longlen[i]) : (parseInt(longlen[i]) + parseInt(shortlen[i-diff]));
    if (dec==0) {
        sum >= 10 ? (sum = sum.toString().split('').pop(), dec=1) : (sum = sum.toString(), dec=0);
        result.push(sum);
      } else {
        sum+dec >= 10 ? (sum = (sum+dec).toString().split('').pop(), dec=1) : (sum = (sum+dec).toString(), dec=0);
        result.push(sum);
      }
  }
  if (dec==1) {
    result.push('1');
  }
  return result.reverse().join('');
}
console.log(sumStrings('00103','08576'))*/



 String.prototype.reverse = function() {
  return this.split('').reverse().join('');  //将reverse方法从数组方法变成了字符串方法
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();  //a、b分别取得其字符串的反转
  var carry = 0;
  var index = 0;                                                //index即两数最大位数
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {  //只要计算两数的位数没有超过最大位就进行循环
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

console.log(sumStrings('0123','1231231233124123123123123123123123123'))