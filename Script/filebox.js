/***********************************
> 應用名稱：filebox
> 軟件版本：1.1.25
> 下載地址：https://apps.apple.com/cn/app/id1558391784
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 解鎖說明：解鎖高級會員權限
> 更新時間：2022-02-18
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特別說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ filebox解鎖會員權限（2022-02-18）@ddgksf2013
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/filebox.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/filebox.js

[mitm] 

hostname=api.revenuecat.com

***********************************/

















var ddgksf2013={"request_date": "2020-06-05T11:54:41Z", "request_date_ms": 1591358081473, "subscriber": {"entitlements": {"filebox_pro": {"expires_date": "2030-02-18T07:52:54Z", "product_identifier": "com.premium.yearly", "purchase_date": "2020-02-11T07:52:54Z"}}, "first_seen": "2020-05-29T07:59:41Z", "last_seen": "2020-06-05T11:46:28Z", "management_url": null, "non_subscriptions": {}, "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3", "original_application_version": "5", "original_purchase_date": "2020-05-29T07:47:32Z", "other_purchases": {}, "subscriptions": {"com.premium.yearly": {"billing_issues_detected_at": null, "expires_date": "2030-02-18T07:52:54Z", "is_sandbox": false, "original_purchase_date": "2020-02-11T07:52:55Z", "period_type": "normal", "purchase_date": "2020-02-11T07:52:54Z", "store": "app_store", "unsubscribe_detected_at": null}}}};
$done({body : JSON.stringify(ddgksf2013)});
