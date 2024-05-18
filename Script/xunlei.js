//原作者脚本：https://raw.githubusercontent.com/Marol62926/MarScrpt/main/xunlei.js


var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20990609",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "0",
    "vasid": "2",
    "vasType": "9",
    "vipDayGrow": "20",
    "vipGrow": "840",
    "vipLevel": "99"
  }]

body = JSON.stringify(obj); 
$done({body}); 
