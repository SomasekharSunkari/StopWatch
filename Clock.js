const timedisplay = document.getElementById("timedisplay");
const startbutton = document.getElementById("startbutton");
const pausebutton = document.getElementById("pausebutton");
const resetbutton = document.getElementById("resetbutton");
let elapsedtime = 0; //The duration from the starting time till the time we caluclutate  !!
let startTime = 0;
let paused = true;
let hrs = 0;
let mins = 0
let secs = 0;
let intervalid;
let milliiseconds =  0;
startbutton.addEventListener("click", () => {
    if (paused) {
        paused = false;
        console.log(elapsedtime);
        startTime = Date.now() - elapsedtime;
        console.log("StartTIme " + startTime)
        intervalid = setInterval(updateTime, 1);
    }

})
resetbutton.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalid);
    hrs  = 0;
    mins = 0;
    milliiseconds = 0;
    secs = 0;
    startTime = 0;
    elapsedtime = 0;
    timedisplay.textContent = `00:00:00:00`;

})
pausebutton.addEventListener("click",()=>{
    paused = true;
    if(paused)
    {
        clearInterval(intervalid);
       
    }
    
})
function updateTime() {
    elapsedtime = Date.now() - startTime;
    console.log("ElapsedTime  : " + elapsedtime)
    milliiseconds = Math.floor(((elapsedtime / 1000 ) * 100)  % 100 );
    secs = Math.floor((elapsedtime / 1000) % 60);
    mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 24);
    secs = padZeros(secs);
    mins = padZeros(mins);
    hrs = padZeros(hrs);
    milliiseconds = padZeros(milliiseconds)

    timedisplay.textContent = `${hrs}:${mins}:${secs}:${milliiseconds}`;

    function padZeros(item) {
        item = item.toString();
        if (item.length < 2) {
            item = "0" + item;
        }
        return item;

    }



}