
// Stopwatch object
var sw = {
cs: 0,
s: 0,
m: 0,
h: 0
};

document.getElementById("stopwatch").innerHTML = display();

// Increments units of time
function timer() {
    sw.cs++;
        if(sw.cs == 99) {
            sw.s++;
            sw.cs = 0;
        }
        if(sw.s == 59) {
            sw.m++;
            sw.s = 0;
        }
        if(sw.m == 59) {
            sw.h++;
            sw.m = 0;
        }
};

var display = function() {
    if(sw.cs < 10) {
        sw.cs = "0" + String(sw.cs);
}   if (sw.cs >= 10) {
        sw.cs = String(sw.cs);
}   if (sw.s < 10) {
        sw.s = "0" + String(sw.s);
}   if (sw.s >= 10) {
        sw.s = String(sw.s);
}   return sw.s + " : " + sw.cs;  
};

// Starts the timer upon clicking Start button in HTML
var start = function() {
    setInterval(timer, 10);
    document.getElementById("stopwatch").innerHTML = display();

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