
function tow(n) {
    if (n>=0 && n < 10){
      return "00" + n;
    } else if (n>=10 && n < 100){
      return "0" + n;
    } else {
      return n;
    }
  }
  
  function getDate(){
    let oDate = new Date()
    let oldTime = oDate.getTime()
    let newDate = new Date('2024/6/7 00:00:00');
    let newTime = newDate.getTime()
    let second = Math.floor((newTime - oldTime) / 1000)
    let day = Math.floor(second / 86400) + 1
    second = second % 86400
    let hour = Math.floor(second / 3600)
    second %= 3600
    let minute = Math.floor(second / 60)
    second %= 60
    let dayto = tow(day) + "";
    const dayArray = dayto.split("");
    document.getElementById("day1").innerHTML = "<span>" + dayArray[0] + "</span><span>" + dayArray[1] + "</span><span>" + dayArray[2] + "</span>"
  }
  getDate();