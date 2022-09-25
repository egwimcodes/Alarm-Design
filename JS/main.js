function showTime(){
    let monthName = ['Jenuary','Febuary','March','April','May','June', 'July','August','September','October','Novermber','December'];
let daysName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sarturday'];
let alarm = new Date();
let year = alarm.getFullYear();
let month = alarm.getMonth();
let day = alarm.getDay();
let hours = alarm.getHours();
let minutes = alarm.getMinutes();
let seconds = alarm.getSeconds();
let hoursCalc = hours % 12;
let amorpm = (hours <= 11) ? 'AM':'PM';

if(hoursCalc <= 9)
 hoursCalc = "0"+ hoursCalc;

 if(minutes <= 9)
 minutes = "0"+ minutes;

 if(seconds <= 9)
 seconds = "0"+ seconds;
 
 setInterval(showTime, 1000)

document.getElementById('display_el').innerHTML = year +" "+ monthName[month]+" "+daysName[day];
document.getElementById('display2').innerHTML = hoursCalc +" : " +minutes +" : "+ seconds+" "+amorpm;
sho
}
showTime();