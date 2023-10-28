function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

var debug = 0;
var lunarInfo = new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0)

var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");

var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');

var nStr2 = new Array('初', '十', '廿', '卅', '　');

var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC");

var sFtv = {"0101":"元旦", "0214":"情人节", "0308":"妇女节", "0312":"植树节", "0315":"消权日", "0322":"世界水日","0401":"愚人节", "0422":"地球日","0501":"劳动节", "0504":"青年节","0531":"无烟日","0601":"儿童节", "0605":"环境日","0701":"建党节", "0711":"人口日","0801":"建军节","0910":"教师节","1001":"国庆节","1224":"平安夜", "1225":"圣诞节"};

function GetsolarFestivalFromSolar(solarDate) {
for (var key in sFtv) {
if (key == solarDate) {
    return sFtv[key];
}
}
return '';
}

var lFtv = {"0101":"春节", "0115":"元宵", "0505":"端午", "0707":"七夕", "0715":"中元", "0815":"中秋", "0909":"重阳", "1208":"腊八", "1223":"小年", "0100":"除夕"};
function GetlunarFestivalFromlunar(lunarDate) {
for (var key in lFtv) {
if (key == lunarDate) {
    return lFtv[key];
}
}
return '';
}

var wFtv = new Array("0520 母亲节", "0630 父亲节");
var solar2lunarMonth = {
1 : '正',
2 : '二',
3 : '三',
4 : '四',
5 : '五',
6 : '六',
7 : '七',
8 : '八',
9 : '九',
10 : '十',
11 : '冬',
12 : '腊'
};

function ConvertLunarMonth2Solar(solarMonth) {
for (var key in solar2lunarMonth) {
if (key == solarMonth) {
    return solar2lunarMonth[key];
}
}
return '';
}

function ConvertSolarDay2LunarDay(solarDay) {
var s;
switch (solarDay) {
case 10:
s = '初十';
break;
case 20:
s = '二十';
break;
case 30:
s = '三十';
break;
default:
s = nStr2[Math.floor(solarDay / 10)];
s += nStr1[solarDay % 10];
}
return (s);
}
function log(level, msg) {
if (debug == 0 || debug == level) if (window.console) {	
var dt= new Date();
window.console.log("[DEBUG]" + msg + ":" + dt.getMilliseconds());
}
}
function lYearDays(y) {
var i, sum = 348;
for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
return (sum + leapDays(y));
}
function leapDays(y) {
if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
else return (0);
}
function leapMonth(y) {
return (lunarInfo[y - 1900] & 0xf);
}

function monthDays(y, m) {
return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}

function Lunar(objDate) {
var m = ""; 
var i, leap = 0,
temp = 0;
var baseDate = new Date(1900, 0, 31);
var offset = Math.floor((objDate.getTime() + 2206425600000) / 86400000);
m += "objDate=" + objDate.getTime() + ", new Date(1900,0,31)=" + baseDate.getTime();
m += "offset=" + offset;
this.dayCyl = offset + 40;
this.monCyl = 14;

for (i = 1900; i < 2050 && offset > 0; i++) {
temp = lYearDays(i);
offset -= temp;
this.monCyl += 12;
}

if (offset < 0) {
offset += temp;
i--;
this.monCyl -= 12;
}

this.year = i;
this.yearCyl = i - 1864;

leap = leapMonth(i);
this.isLeap = false;

for (i = 1; i < 13 && offset > 0; i++) {
if (leap > 0 && i == (leap + 1) && this.isLeap == false) {--i;
    this.isLeap = true;
    temp = leapDays(this.year);
} else {
    temp = monthDays(this.year, i);
}

if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;

offset -= temp;
if (this.isLeap == false) this.monCyl++;
}

if (offset == 0 && leap > 0 && i == leap + 1) if (this.isLeap) {
this.isLeap = false;
} else {
this.isLeap = true; --i; --this.monCyl;
}

if (offset < 0) {
offset += temp; --i; --this.monCyl;
}

this.month = i;
this.day = offset + 1;

m += "offset=" + offset + ", year=" + this.year + ", yearCyl=" + this.yearCyl + ", month=" + this.month + ",\n monthCyl=" + this.monthCyl + ", day=" + this.day + ", dayCyl=" + this.dayCyl;
}

function solarDays(y, m) {
if (m == 1) return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
else return (solarMonth[m]);
}

function cyclical(num) {
return (Gan[num % 10] + Zhi[num % 12]);
}

function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {

this.isToday = false;
this.sYear = sYear;
this.sMonth = sMonth;
this.sDay = sDay;
this.week = week;
this.lYear = lYear;
this.lMonth = lMonth;
this.lDay = lDay;
this.isLeap = isLeap; 
this.cYear = cYear;
this.cMonth = cMonth;
this.cDay = cDay;
this.color = '';
this.lunarFestival = '';
this.solarFestival = '';
this.solarTerms = '';
}

function sTerm(y, n) {
var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) - 2208549300000);
return (offDate.getUTCDate());
}

function calendar(y, m) {
var sDObj, lDObj, lY, lM, lD = 1,
lL, lX = 0,
tmp1, tmp2;
var lDPOS = new Array(3);
var n = 0;
var firstLM = 0;
sDObj1 = new Date();
sDObj = new Date(y, m, 1);

this.length = solarDays(y, m);
this.firstWeek = sDObj.getDay();
var dateGridIndex = this.firstWeek - 1; 
dateGridIndex = this.firstWeek == 0 ? 6 : dateGridIndex; 
for (var i = 0; i < 42; i++) {
sDObj = new Date(y, m, i + 1 - dateGridIndex); 
lDObj = new Lunar(sDObj);
lY = lDObj.year;
lM = lDObj.month;
lD = lDObj.day;
lL = lDObj.isLeap;
lX = lL ? leapDays(lY) : monthDays(lY, lM);

if (n == 0) firstLM = lM;
lDPOS[n++] = i - lD + 1;

var year = sDObj.getFullYear();
var month = sDObj.getMonth();
var day = sDObj.getDate();
this[i] = new calElement(year, month + 1, day, nStr1[(i + this.firstWeek) % 7], lY, lM, lD++, lL, cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++));		

var monthDay = PrefixInteger(month + 1, 2) + "" + PrefixInteger(day, 2);
this[i].solarFestival = GetsolarFestivalFromSolar(monthDay);   

var lunarMonthDay = PrefixInteger(lM, 2) + "" + PrefixInteger(lDObj.day, 2);		
this[i].lunarFestival = GetlunarFestivalFromlunar(lunarMonthDay); 
}

if (y == tY && m == tM) {
this[tD + dateGridIndex - 1].isToday = true;
}

tmp1 = sTerm(y, m * 2) - 1 + dateGridIndex;
tmp2 = sTerm(y, m * 2 + 1) - 1 + dateGridIndex;  
this[tmp1].solarTerms = solarTerm[m * 2];
this[tmp2].solarTerms = solarTerm[m * 2 + 1];

for (i in wFtv) if (wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) if (Number(RegExp.$1) == (m + 1)) {
tmp1 = Number(RegExp.$2);
tmp2 = Number(RegExp.$3);
this[((this.firstWeek > tmp2) ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
}
}
var cld;
var todayIndex = -1;

function drawCld(SY, SM) {
var i, sD, s, size;
log(2, "calendar_start");
cld = new calendar(SY, SM);
log(2, "calendar_end");	
for (i = 0; i < 42; i++) {
sObj = document.getElementById('sd' + i);
$('#sd' + i).removeClass('today');
var dayItem = cld[i];
sObj.innerHTML = '<span class="solarDay">' + dayItem.sDay + '</span>';
if (dayItem.isToday || i == todayIndex) {
    var solarCurDay = dayItem.sYear + "年" + dayItem.sMonth + "月";
    document.getElementById("calendarmonth").innerHTML = solarCurDay;
}
sObj.style.color = dayItem.color;
var lunarDesc;
if (dayItem.lDay == 1) {
    lunar = ConvertLunarMonth2Solar(dayItem.lMonth);
    lunarDesc = (dayItem.isLeap ? '闰': '') + lunar + '月';
} else {
    lunarDesc = ConvertSolarDay2LunarDay(dayItem.lDay);
}

s = dayItem.lunarFestival;
if (s.length > 0) {
    if (s.length > 7) s = s.substr(0, 5) + '…';
} else {
    s = dayItem.solarFestival;
    if (s.length > 0) {		
        size = (s.charCodeAt(0) > 0 && s.charCodeAt(0) < 128) ? 9 : 5;
        if (s.length > size + 1) s = s.substr(0, size - 1) + '…';
    } else {
        s = dayItem.solarTerms;
    }
}
if (s.length > 0) {
    sObj.innerHTML += '<span class="lunarDay festival">' + s + '</span>'; 
    sObj.style.color = '#0ff';
} else {
    sObj.innerHTML += '<span class="lunarDay">' + lunarDesc + '</span>'; 	
}
if (dayItem.isToday) {
    var lunarCurDay = ConvertLunarMonth2Solar(dayItem.lMonth) + "月" + ConvertSolarDay2LunarDay(dayItem.lDay);
     $('#sd' + i).addClass('today');
    todayIndex = i;
    console.log(dayItem.isToday);
    document.getElementById("gz").innerHTML = "农历" + lunarCurDay; 
    if (s.length > 0){
        document.getElementById("festival1").innerHTML = s;
    }
    sObj.parentElement.id = "toweek";
}

if (dayItem.sMonth != SM + 1){
    sObj.getElementsByTagName("span")[0].className += " gray";
    sObj.getElementsByTagName("span")[1].className += " gray"; 
}
    
}
log(2, "draw_end");	
}

function changeCld() {
var y, m;
y = document.getElementById("sy").selectedIndex + 1900;
m = document.getElementById("sm").selectedIndex;
drawCld(y, m);
}

function pushBtm(K) {
if (lastSelId != -1){
$('#sd' + lastSelId).removeClass('tdSelState');
}

switch (K) {
case 'YU':
if (document.getElementById("sy").selectedIndex > 0) document.getElementById("sy").selectedIndex--;
break;
case 'YD':
if (document.getElementById("sy").selectedIndex < 149) document.getElementById("sy").selectedIndex++;
break;
case 'MU':
if (document.getElementById("sm").selectedIndex > 0) {
    document.getElementById("sm").selectedIndex--;
} else {
    document.getElementById("sm").selectedIndex = 11;
    if (document.getElementById("sy").selectedIndex > 0) document.getElementById("sy").selectedIndex--;
}
break;
case 'MD':
if (document.getElementById("sm").selectedIndex < 11) {
    document.getElementById("sm").selectedIndex++;
} else {
    document.getElementById("sm").selectedIndex = 0;
    if (document.getElementById("sy").selectedIndex < 149) document.getElementById("sy").selectedIndex++;
}
break;
default:
document.getElementById("sy").selectedIndex = tY - 1900;
document.getElementById("sm").selectedIndex = tM;
}
changeCld();
}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();

var width = "130"; 
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var show = 0;
var sw = 0;
var cnt = 0;
var lastSelId = -1;

var dStyle;
document.onmousemove = mEvn;

function mOvr(v) {
return;
var festival = document.getElementById("festival");
var datedetail = document.getElementById("datedetail");

var sObj = document.getElementById('sd' + v);
var firstWeek = cld.firstWeek;
d = v - firstWeek;

if (d > -1 && d < cld.length) {
sObj.style.cursor = 'move';
if (cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '') {
    festival.innerHTML = "";
    festival.style.display = "none";
} else {
    festival.innerHTML = cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival;
    festival.style.display = "block";
}
datedetail.innerHTML = cld[d].sYear + ' 年 ' + cld[d].sMonth + ' 月 ' + cld[d].sDay + ' 日<br />星期' + cld[d].week + '<br />' + '<span>农历' + (cld[d].isLeap ? '闰 ': ' ') + cld[d].lMonth + ' 月 ' + cld[d].lDay + ' 日<br />' + cld[d].cYear + '年 ' + cld[d].cMonth + '月 ' + cld[d].cDay + '日</span>';

if (show == 0) {
    dStyle.left = (x + offsetx - (width / 2)) + "px";
    dStyle.top = (y + offsety) + "px";
    dStyle.visibility = "visible";
    show = 1;
}
}
}

function mOut() {
if (cnt >= 1) {
sw = 0
}
if (sw == 0) {
show = 0;
} else cnt++;
}

function mClick(v){
if (lastSelId != -1){
$('#sd' + lastSelId).removeClass('tdSelState');	
}
var dayItem = cld[v];
$('#sd' + v).addClass('tdSelState');	
lastSelId = v;	
}


function mEvn(e) {
if (!show) return;
if (window.event) {
x = event.x;
y = event.y;
if (document.body.scrollLeft) {
    x += document.body.scrollLeft;
    y += document.body.scrollTop;
}
dStyle.left = (x + offsetx - (width / 2)) + "px";
dStyle.top = (y + offsety) + "px";
} else {
dStyle.left = (e.pageX + offsetx - (width / 2)) + "px";
dStyle.top = (e.pageY + offsety) + "px";
}
}



function setCookie(name, value) {
var today = new Date();
var expires = new Date();
expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365);
document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString();
}

function getCookie(Name) {
var search = Name + "=";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search);
if (offset != -1) {
    offset += search.length;
    end = document.cookie.indexOf(";", offset);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(offset, end));
} else return "";
}
}

function fillSelect() {
syd = document.getElementById("sy");
syd.innerHTML = "";
for (i = 1900; i < 2050; i++) {
ins = document.createElement("OPTION");
ins.innerHTML = i + ' 年';
syd.appendChild(ins);
}
smd = document.getElementById("sm");
smd.innerHTML = "";
for (i = 1; i < 13; i++) {
ins = document.createElement("OPTION");
ins.innerHTML = i + ' 月';
smd.appendChild(ins);
}
}

function fillCalendar() {
var gNum;
var tablex = document.createElement("table");
tablex.setAttribute("id", "week");
for (i = 0; i < 6; i++) {
var trx1 = document.createElement("tr");
trx1.setAttribute("class", "tr1");
for (j = 0; j < 7; j++) {
    gNum = i * 7 + j;
    var tdx = document.createElement("td");
    tdx.setAttribute("id", "sd" + gNum);
    tdx.setAttribute("onMouseOver", 'mOvr(' + gNum + ')');
    tdx.setAttribute("onclick", 'mClick(' + gNum + ')');	
    tdx.setAttribute("onMouseOut", "mOut()");
    
    var remainder = gNum%7;
    if (remainder == 5 || remainder==6) {
        tdx.setAttribute("class", "aorange");
    }else{
        tdx.setAttribute("class", "one");
    }
    trx1.appendChild(tdx);
}
tablex.appendChild(trx1);
}
document.getElementById("calendar").appendChild(tablex);
}

function initial() {
log(2, "select_start");	
fillSelect();
log(2, "select_end");		
fillCalendar();
document.getElementById("sy").selectedIndex = tY - 1900;
document.getElementById("sm").selectedIndex = tM;
drawCld(tY, tM);
}

function TimeAdd(UTC, T) {
var PlusMinus, DST, y;
alert(UTC);
if (T.substr(0, 1) == "-") {
PlusMinus = -1;
} else {
PlusMinus = 1;
}
}

function showAll(){
$(".tr1").addClass("show1");
$("#calendarmonth").addClass("showblock");
document.getElementById("panel").style.marginBottom = "0";
document.getElementById("showall").style.display = "none";
document.getElementById("hide").style.display = "inline";
document.getElementById("panel").style.display = "flex";
}
function hideAll(){
$(".tr1").removeClass("show1");
$("#calendarmonth").removeClass("showblock");
document.getElementById("panel").style.marginBottom = "5px";
document.getElementById("showall").style.display = "inline";
document.getElementById("hide").style.display = "none";
document.getElementById("panel").style.display = "none";
}