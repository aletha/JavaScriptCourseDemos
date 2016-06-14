function getTimeRemaining(later){
  today = new Date();
  endDate = new Date(later);
  time = endDate.getTime() - today.getTime();
  //var t = Date.parse(later) - Date.parse(new Date());
  seconds = Math.floor( (time/1000) % 60 );
  minutes = Math.floor( (time/(1000*60)) % 60 );
  hours = Math.floor( (time/(1000*60*60)) % 24 );
  days = Math.floor( time/(1000*60*60*24) );

}

function setClock(later){
  var daysSpan = document.querySelector('.days');
  var hoursSpan = document.querySelector('.hours');
  var minutesSpan = document.querySelector('.minutes');
  var secondsSpan = document.querySelector('.seconds');

  function changeClock(){
    var time = getTimeRemaining(later);

    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = ('0' + hours).slice(-2);
    minutesSpan.innerHTML = ('0' + minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + seconds).slice(-2);

    if(time<=0){
      clearInterval(timeInterval);
    }
  }

 changeClock();
  var timeInterval = setInterval(changeClock,1000);
}
var deadline = 'December 31 2016 00:00:50 UTC+0200';
//try a date in the past
//var deadline = 'December 31 2014 00:00:50 UTC+0200';
setClock( deadline);