function getNowTime() {
    let now = new Date();
    let year = now.getFullYear(); 
    let month = now.getMonth() + 1;
    let today = now.getDate(); 
    let day = now.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[day];
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 
    let nowTime = ''
    nowTime = year + '/' + fillZero(month) + '/' + fillZero(today) + ' ' + week;
    document.getElementById('nowTime').innerHTML = nowTime;
    document.getElementById('nowHour').innerHTML = hour;
    document.getElementById('nowMin').innerHTML = fillZero(minute);
    document.getElementById('nowSec').innerHTML = fillZero(second);
  };
  
  function fillZero (str) {
    var realNum;
    if (str < 10) {
      realNum = '0' + str;
    } else {
      realNum = str;
    }
    return realNum;
  }
  setInterval('getNowTime()', 1000);