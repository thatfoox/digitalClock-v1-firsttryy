var hourDigit = document.getElementById("hour");
var minuteDigit = document.getElementById("minute");
var secondDigit = document.getElementById("second");
var date = document.getElementById("date");

 setInterval(()=>{
    var now = new Date();
    hourDigit.innerHTML= now.getHours();
    minuteDigit.innerHTML = now.getMinutes();
    secondDigit.innerHTML = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();

    date.innerHTML= day + " / " + month + " / " + year;
 })