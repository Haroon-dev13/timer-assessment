var countDownDate = new Date("Jan 25, 2023 19:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours; 
document.getElementById("minutes").innerHTML = minutes; 
document.getElementById("seconds").innerHTML = seconds; 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("content").style.display = "none"
    document.getElementById("end").innerHTML = "TIME EXPIRED!";
}
}, 1000);