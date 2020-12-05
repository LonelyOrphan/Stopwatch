
//To-Do
//Figure out how to remove document statement from repeating function

// Stopwatch object
var sw = {
cs: 0,
s: 0,
m: 0,
h: 0,
};

var face = document.getElementById("stopwatch");

// Increments units of time
function timer() {
    sw.cs++;
        if (sw.cs == 99) {
            sw.s++;
            sw.cs = 0;
        }
        if (sw.s == 59) {
            sw.m++;
            sw.s = 0;
        }
        if (sw.m == 59) {
            sw.h++;
            sw.m = 0;
        };
        display();
};

//Adds and removes 0s where necessary
function display() {
    if (sw.cs < 10) {
        sw.cs = "0" + String(sw.cs);
}   else if (sw.cs >= 10) {
        sw.cs = String(sw.cs);
}   if (sw.s < 10) {
        sw.s = "0" + String(sw.s);
}   else if (sw.s >= 10) {
        sw.s = String(sw.s);
}   if (sw.m < 10) {
        sw.m = "0" + String(sw.m);
}   else if (sw.m >= 10) {
        sw.m = String(sw.m);
} face.innerHTML = sw.m + " : " + sw.s + " : " + sw.cs;
//Prevents multiple 0s being added to s
    if (sw.s.substring(0, 1) == "0") {
        sw.s = sw.s.substring(1);
    }
    if (sw.m.substring(0, 1) == "0") {
        sw.m = sw.m.substring(1);
    }
};

// Starts the timer upon clicking Start button in HTML
var start = function() {
    setInterval(timer, 10);
};

// Stops the timer upon clicking Stop button in HTML
function clear() {
    clearInterval(start);
};





// To do later:
// Incorporate Start/Stop in one button




/*var stopwatch = {
    ms: 78,
    s: 0,
    m: 0,
    h: 0,
    addMs: function() {
        if (this.ms < 999) {
            this.ms++;
            alert(this.ms);
    }   else if (this.ms >= 999) {
            this.ms = 0;
            alert(this.ms);
    }}
};

var timer;

function atimer() {
timer = setInterval(stopwatch.addMs, 3000);
}

atimer();

console.log(timer);
*/



//typeof(stopwatch.addS);

//clear = setTimeout( function ( ) { // javascript statement here }, 100;