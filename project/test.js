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
/*function sumStrings(a, b) {
    var aarr = a.split(''),
        barr = b.split(''),
        shortlen = null,
        longlen = null,
        sum = 0,
        result = [],
        dec = 0,
        diff = 0,
        anum = aarr.concat(),
        bnum = barr.concat();
    for (var j in aarr) {
        if (aarr[j] == '0') {
            anum.shift();
            continue;
        }
        break;
    }
    for (var k in barr) {
        if (barr[k] == '0') {
            bnum.shift();
            continue;
        }
        break;
    }
    anum.length >= bnum.length ? (longlen = anum, shortlen = bnum) : (longlen = bnum, shortlen = anum);
    diff = longlen.length - shortlen.length;
    for (var i = longlen.length - 1; i >= 0; i--) {
        sum = i - diff < 0 ? parseInt(longlen[i]) : (parseInt(longlen[i]) + parseInt(shortlen[i - diff]));
        if (dec == 0) {
            sum >= 10 ? (sum = sum.toString().split('').pop(), dec = 1) : (sum = sum.toString(), dec = 0);
            result.push(sum);
        } else {
            sum + dec >= 10 ? (sum = (sum + dec).toString().split('').pop(), dec = 1) : (sum = (sum + dec).toString(), dec = 0);
            result.push(sum);
        }
    }
    if (dec == 1) {
        result.push('1');
    }
    return result.reverse().join('');
}
console.log(sumStrings('00103', '08576'))*/



/*String.prototype.reverse = function() {
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

console.log(sumStrings('0123','1231231233124123123123123123123123123'))*/

/*for(let i=0,l=5;i<l;i++){
  setTimeout(function(){
    console.log(i); // 5,5,5,5,5
  },1000*i)
}*/

/*function pinLock(pin) {
  var pinval = [[1,4,7],[2,5,8],[3,6,9]];
  var x,y;
  for (let i = 0; i < pinval.length; i++) {
    pinval[i].indexOf(pin) != -1 ? (y=pinval[i].indexOf(pin), x=i) : "";
  }
  var arr = [pinval[x-1][y],pinval[x][y-1],pinval[x][y],pinval[x][y+1],pinval[x+1][y]];
  var result = arr.join("").split("");
  console.log(result);
}
pinLock(2);*/

//八皇后问题
/*function queen() {
  var gezi;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; i++) {
         
    }
  }
}*/
/*{
  console.log(bar);
  let bar =2;
}*/

/*for(var i=0;i<=5;i++) {
  (function(){
    setTimeout(function(){
      console.log(i)
    }, i*1000);
  })();
}*/

/*var MyModeles = (function Manager() {
  var modules = {}; //对象

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
})();

MyModeles.define("bar", [], function(){
  function hello(who) {
    return "let me introduce" + who;
  }

  return {
    hello: hello
  };
});

var bar = MyModeles.get("bar");
console.log(bar.hello("hippo"));*/

/*function foo(num) {
  console.log("foo " + num);
  this.count++;
}

foo.count = 0;
for (var i = 0; i < 10; i++) {
  if (i>5) {
    foo(i);
  }

}
  console.log(foo.count);
  console.log(global.count);*/
/*
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a:2,
    foo: foo
  };
  var bar  = obj.foo;
  var a = "oops,global";
  bar();*/


/*  function orderWeight(strng) {
    let arr = strng.split(" "),result=[];
    arr.forEach(function(item) {
      result.push(item.split(""));
    });
    let count = result.map(function(item) {
      return item.reduce(function(a,b) {
        return parseInt(a)+parseInt(b);
      });
    });
    console.log(count);
    console.log(arr);
  }
  orderWeight("123 12 232")
  var b="asd";
  console.log(b.toUpperCase())
*/
/*function bubble(string) {
  let arr = string.split(" ");

}*/

/* function curry(fn) {
   var args = Array.prototype.slice.call(arguments,1);
   console.log(args);
   return function() {
     var innerArgs = Array.prototype.slice.call(arguments);
     var finalArgs = args.concat(innerArgs);
     console.log(innerArgs);
     console.log(finalArgs);
     return fn.apply(null, finalArgs);
   }
 }

 function add(num1, num2) {
   return num1+num2;
 }
 var curriedAdd = curry(add,5);
 console.log(curriedAdd(3));*/

/*  var person = {name: "nicholas", getAge : function() {console.log(this.age)}};
  person.age=21;
  person.getAge();
  console.log(Object.keys(person))*/
/*    function createFunction() {
        var result = new Array();
        for (var i = 0; i < 10; i++) {
            result[i] = i;
        }
        return result;
    }
    console.log(createFunction());*/

/*function kebabize(str) {
    // return
    var allstr = str.replace(/\d/g, "").split("");
    var result = "",
        cur;
    for (let i = 0; i < allstr.length; i++) {
        cur = allstr[i].charCodeAt();
        cur >= 65 && cur <= 90 ? (result += "-" + allstr[i].toLowerCase()) : (result += allstr[i]);
    }
    return result;
}
console.log(kebabize("myCameCased3String"))*/



//背包回溯法
/*function backpack() {
    var c = 100;                //背包最大容量
    var n=5;                    
    var w = [10,20,30,40,60];   //代表5个物品的重量
    var v = [20,30,65,40,60];   //代表5个物品的价值
    var path = [];              //来记录树中的移动路径，为1的时候表示选择该数据，为0表示不选择
    var maxvalue = 0;           //背包的最大权重值
    function search(i) {
        if(i>n) {
            checkMax();
        } else {
            path[i] = 0;
            search(i+1);
            path[i]=1;
            search(i+1);
        }
    }
    function checkMax() {
        var weight = 0, value = 0;
        for(var i=0; i<n; i++) {
            if(path[i] ==1 ) {
                weight +=w[i];
                value +=v[i];
            } else {
                path[i] == 0;
            }
        }
        if(weight <=c) {
            if (value >= maxvalue) {
                maxvalue = value;
                console.log('最大价值为'+maxvalue);
                console.log('所选物品（1为选中，0代表不选）:' + path);
            }
        }
    }
    search(0);
    //console.log(path);
}
backpack();*/


/*function queen(a, cur) {
    if (cur == a.length) {                                          //如果计算次数到了8次就返回
        console.log(a);
        return
    };
    for (var i = 0; i < a.length; i++) {                            //
        a[cur] = i;
        flag = true;
        for (var j = 0; j < cur; j++) {
            var ab = i - a[j];
            if (a[j] == i || (ab > 0 ? ab : -ab) == cur - j) {
                flag = false;
                break
            };
        };
        if (flag) {
            queen(a, cur + 1)
        };
    };
};
queen([1, 1, 1, 1, 1, 1, 1, 1], 0)
//八皇后问题=>使用回溯法
function queen() {
    var n=8; //总共8个位置放置皇后;
    var pos = [];
    function place(i) {
        if (i>=n) {
            position();
        } else {
            for (var x=0;x<8;x++) {
                if (pos.indexOf(x)===-1) {
                    pos.push(x);
                    place(i+1);
                    console.log(pos)
                } else {
                    continue;
                }
            }
        }
    }
    function position() {
        for (var i = 0; i < pos.length; i++) {
            for (var j=0; j<8;j++) {
                if(pos[i+j] - pos[i] == j || pos[i+j] - pos[i] == -j || pos[i] - pos[i-j] == j || pos[i] - pos[i-j] == -j) {
                    break;
                } else {
                    continue;
                }
            }
        }

    }
    place(0);
}
queen();*/

/*function mazeRunner(maze, directions) {
    // Code here
    var start = [],
        cur = [],
        move = [],
        status = "";

    for (var i = 0, len = maze.length; i < len; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                start = [i, j];
                break;
            }
        }
    }
    for (let i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case "N":
                move = [-1, 0];
                test(move, i);
                break;
            case "E":
                move = [0, 1];
                test(move, i);
                break;
            case "S":
                move = [1, 0];
                test(move, i);
                break;
            case "W":
                move = [0, -1];
                test(move, i);
                break;
        }
        switch (status) {
            case "Dead":
                console.log("dead");
                return "Dead";
                break;
            case "Lost":
                console.log("lost");
                return "Lost";
                break;
            case "Finish":
                console.log("finish");
                return "Finish";
                break;
        }
    }
    //-------------------------------------
    function test(move, i) {
        if (cur.length == 0) {
            cur = [start[0], start[1]];
        }
        cur[0] += move[0];
        cur[1] += move[1];
        if (cur[0] > maze.length-1 || cur[0] < 0 || cur[1] > maze[0].length-1 || cur[1] < 0 || maze[cur[0]][cur[1]] === 1) {
            status = "Dead";
            return;
        };
        if(maze[cur[0]][cur[1]] == 3){
            status = "Finish"
            return
        };
        if (i === directions.length - 1) {
            status == "" ? (status = "Lost") : "";
            return
        }
    }
}*/
/*mazeRunner([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
], ["E","E","E","E","E","N","N","N","N","N"]);*/


/*function count(string) {
    // The function code should be here
    var result = {}, agen = [];
    if (string.length>0) {
        var arr = string.split("");
        for (var i in arr) {
            agen.indexOf(arr[i]) === -1 ? (agen.push(arr[i]), result[arr[i]] = 1) : (result[arr[i]] += 1);
        }
    }
    return result;
}
console.log(count("aba"));*/

function dataReverse(data) {
    // Your code here
    var result = [];
    if(data.length%8 !== 0) {
        return [];
    }
    while (data.length > 8) {
        var arr = [];
        for (var i = 0; i < 8; i++) {
            arr.push(data.shift());
        }
        result.push(arr);
    }
    result.push(data);
    var text = result.join().split(",");
    for (var i in text) {
        text[i] = parseInt(text[i]);
    }
    console.log(text);
}
dataReverse( [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);