function currentTime(){
var date = new Date();
var time = "The current time is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

console.log(time);
return time;
}
currentTime();