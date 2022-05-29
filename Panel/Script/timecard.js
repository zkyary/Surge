var tlist = {
  1: ["元旦", "2022-01-01"],
  2: ["春节", "2022-02-01"],
  3: ["元宵", "2022-02-15"],
  4: ["清明", "2022-04-05"],
  5: ["劳动", "2022-05-01"],
  6: ["母亲节", "2022-05-08"],
  7: ["端午", "2022-06-03"],
  8: ["父亲节", "2022-06-19"],
  9: ["夏至", "2022-06-21"],
  10: ["七夕节", "2022-08-04"],
  11: ["中元节", "2022-08-12"],
  12: ["生日", "2022-08-21"],
  13: ["中秋", "2022-09-10"],
  14: ["秋分", "2022-09-23"],
  15: ["菲宝生日", "2022-6-27"],
  16: ["国庆", "2022-10-01"],
  17: ["重阳节", "2022-10-04"],
  18: ["万圣节", "2022-10-31"],
  19: ["光棍节", "2022-11-11"],
  20: ["感恩节", "2022-11-24"],
  21: ["冬至", "2022-12-22"],
  22: ["平安夜", "2022-12-24"],
  23: ["圣诞节", "2022-12-25"],
  24: ["元旦", "2023-01-01"],
  25: ["除夕", "2023-01-21"],
  26: ["春节", "2023-01-22"],
  27: ["立春", "2023-02-04"],
  28: ["元宵节", "2023-02-05"],
  29: ["情人节", "2023-02-14"],
  30: ["龙抬头", "2023-02-21"]
  
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      //console.log("最近的日期是:" + tlist[i.toString()][0]);
      //console.log("列表长度:" + Object.getOwnPropertyNames(tlist).length);
      //console.log("时间差距:" + Number(dateDiff(tnowf, tlist[i.toString()][1])));
      return i;
    }
  }
}

//如果是0天，发送emoji;
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉";
  } else {
    return daythis;
  }
}

//提醒日当天发送通知
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[nowlist][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[nowlist][1], "timecardpushed");
    $notification.post("假日祝福","", "今天是" + tlist[nowlist][1] + "日 " + tlist[nowlist][0] + "   🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
    //console.log("当日已通知");
  }
}

//>图标依次切换乌龟、兔子、闹钟、礼品盒
function icon_now(num){
  if(num<=7 && num>3 ){
    return "hare"
  }else if(num<=3 && num>0){
    return "alarm.fill"
  }else if(num==0){
    return "gift"
  }else{
    return "tortoise"
  }
}
//>图标颜色
function icon_color(num){
  if(num<=7 && num>3){
    return '#F0FCFF'
  }else if(num<=3 && num>0){
    return '#EA5506'
  }else if(num==0){
    return '#BE002F'
  }else{
    return '#00BC12'
  }
}
$done({
title:title_random(tnumcount(Number(nowlist))),
icon:icon_now(tnumcount(Number(nowlist))),
"icon-color":icon_color(tnumcount(Number(nowlist))),
content:tlist[nowlist][0]+":"+today(tnumcount(nowlist))+"天,"+tlist[Number(nowlist) + Number(1)][0] +":"+ tnumcount(Number(nowlist) + Number(1))+ "天,"+tlist[Number(nowlist) + Number(2)][0]+":"+tnumcount(Number(nowlist) + Number(2))+"天"
})
function title_random(num){
  let r = Math.floor((Math.random()*12)+1);
  let dic = {
    1:"距离放假，还要摸鱼多少天？🥱",
    2:"坚持住，就快放假啦！💪",
    3:"上班好累呀，好想放假😮‍💨",
    4:"努力，我还能加班24小时！🧐",
    5:"天呐，还要多久才放假呀？😭",
    6:"躺平中，等放假(☝ ՞ਊ ՞)☝",
    7:"只有摸鱼才是赚老板的钱🙎🤳",
    8:"一起摸鱼吧✌(՞ټ՞ )✌",
    9:"摸鱼中，期待下一个假日.ʕʘ‿ʘʔ.",
    10: "小乌龟慢慢爬🐢",
    11:"太难了！😫😩😖(´◉‿◉)",
    12:"反正放假也不能去玩😤"
  };
  return num==0?"节日快乐🎉，万事大吉🥳":dic[r]
}
