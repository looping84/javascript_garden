/**
 * Created by mmillet on 2015/3/31.
 * //run: node find_all_combination.js > millet.txt
 *
 * 一共5位数
 * 第一位是只能是*A D G H I* 之一
 * 第二位0到9其中之一
 * 第三位到第五位 26个英文字母任选其一
 */
"use strict";
(function() {
  console.time("Time");
  var getToken = function(list) {
    var map = [];  //map用来从list中取对应的值
    for(var i = 0; i < list.length; i++) {  //初始化map
      map[i] = 0;
    }
    var add = function(cur) {  //做加的运算，类似进制运算
      map[cur] = map[cur] || 0;
      var val = map[cur] + 1;
      if(val < list[cur].length) { //正常情况，末尾+1
        map[cur] = val;
        return map;
      } else if(cur > 0){ //该进位了，当前位归0
        map[cur] = 0;
        return add(cur - 1);
      } else {
        return false; //加到最大值了，返回false
      }
    };
    var strTmp = "";
    while(add(list.length - 1)) { //从最后一位开始一直加
      map.forEach(function(i, j) {
        strTmp += list[j][i];
      });
      strTmp += "\n";
    }
    console.log(strTmp);
  };
  getToken([
    ["A", "D", "G", "H", "I"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  ]);
  console.timeEnd("Time");
}());