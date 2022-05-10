
  setInterval(currentTime, 1000);

function currentTime()
{
    var time = new Date();   // creating object of Date class
    var dayName=time.getDay();
    var month=time.getMonth();
    var year=time.getFullYear();
    var date=time.getDate();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";
    
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    if(hour >12){
      am_pm = "PM";
      hour -= 12;
    }
   if(hour==12)
   am_pm = "PM";

  
   /* if (hour == 0) 
   {
     hour = 12;
     am_pm = "AM";
   } */

    /* hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec; */
    
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i ; //add zero in front of numbers < 10
      }  
      return i;
    }
    checkTime();

   //value of current time
   var currentTime = `${hour}: ${min}:${sec} ${am_pm}`;

  // value of present day(Day, Month, Year)
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var presentDay=`${week[dayName]}, ${months[month]} ${date}, ${year}`;

  const clock = document.getElementById("time");
  const dayIntro=document.getElementById("dayName");

  clock.innerHTML = currentTime;
  dayIntro.innerHTML = presentDay;
}

currentTime();  //calling currentTime() function to initiate the process 