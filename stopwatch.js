let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
 
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
 
start.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stop.addEventListener('click', function () {
    timer = false;
});
 
reset.addEventListener('click', function () {
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('milliseconds').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        milliseconds++;
 
        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
        }
 
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
 
        if (minutes == 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }
 
        let hrString = hours;
        let minString = minutes;
        let secString = seconds;
        let countString = milliseconds;
 
        if (hours < 10) {
            hrString = "0" + hrString;
        }
 
        if (minutes < 10) {
            minString = "0" + minString;
        }
 
        if (seconds < 10) {
            secString = "0" + secString;
        }
 
        if (milliseconds < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hours').innerHTML = hrString;
        document.getElementById('minutes').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        document.getElementById('milliseconds').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
