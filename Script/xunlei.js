// Surge script to modify all relevant quotas to super.v9 (12 TB) and VIP info

let body = $response.body;
let obj = JSON.parse(body);

// 定义 super.v9 的配额 (12 TB)
let superV9Quota = "13194139533312";

// 修改顶层配额信息
if (obj.limit) {
  obj.limit = superV9Quota;
}

// 修改 quota 对象中的相关配额
if (obj.quota) {
  obj.quota.platinum = superV9Quota;
  obj.quota["platinum.year"] = superV9Quota;
  obj.quota.student = superV9Quota;
  obj.quota.super = superV9Quota;
  obj.quota["super.v1"] = superV9Quota;
  obj.quota["super.v2"] = superV9Quota;
  obj.quota["super.v3"] = superV9Quota;
  obj.quota["super.v4"] = superV9Quota;
  obj.quota["super.v5"] = superV9Quota;
  obj.quota["super.v6"] = superV9Quota;
  obj.quota["super.v7"] = superV9Quota;
  obj.quota["super.v8"] = superV9Quota;
  obj.quota["super.v9"] = superV9Quota;
  obj.quota["super.year"] = superV9Quota;
  obj.quota.user = superV9Quota;
}

// 修改 VIP 信息
obj.vipList = [{
  "expireDate": "20290609",
  "isAutoDeduct": "0",
  "isVip": "1",
  "isYear": "1",
  "payId": "0",
  "payName": "---",
  "register": "0",
  "vasid": "2",
  "vasType": "5",
  "vipDayGrow": "69",
  "vipGrow": "888",
  "vipLevel": "69"
}];

// 转换回 JSON 字符串
body = JSON.stringify(obj); 

$done({body});