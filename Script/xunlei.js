//原作者脚本：https://raw.githubusercontent.com/Marol62926/MarScrpt/main/xunlei.js


var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20290609",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "1",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "69",
    "vipGrow": "888",
    "vipLevel": "69"
  }]

body = JSON.stringify(obj); 
$done({body}); 
