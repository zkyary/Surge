
/******************************
GUGA （ipad）
***********************

[rewrite_local]
^https?:\/\/www\.guga\.co\/api-base\/v2\/(state|preferential-product) url script-response-body https://raw.githubusercontent.com/zkyary/Surge/main/Script/GUGA.js



[mitm]
hostname = www.guga.co

*******************************/
var body = $response.body;
var data = JSON.parse(body); 
data.data.level = 1;  
data.data.expire = 1; 
body = JSON.stringify(data);
$done(body);