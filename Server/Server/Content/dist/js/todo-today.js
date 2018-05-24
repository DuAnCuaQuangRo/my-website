var count_check = document.getElementById("count-check");
var check_time = document.getElementById("check-today");
var time = check_time.getElementsByClassName("check");

var count;

function checkToday() {
    
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 5) {
        //console.log('wake up');
        count = 1;
    } else if (curHr < 8) {
        //console.log('codding');
        count = 2;
    } else if (curHr < 12) {
        if (curHr >= 11) {
            if (today.getMinutes() >= 30) {
                //console.log('return codding');
                count = 4;
            } else {
                //console.log('stop codding');
                count = 3;
            }
        } else {
            //console.log('stop codding');
            count = 3;
        }
    } else if (curHr < 14) {
        // console.log('return codding');
        count = 4;
    } else if (curHr < 18) {
        if (curHr >= 17) {
            if (today.getMinutes() >= 30) {
                //console.log('check server');
                count = 6;
            } else {
                //console.log('Go to Home');
                count = 5;
            }
        } else {
            // console.log('Go to Home');
            count = 5;
        }
    } else if (curHr < 20) {
        //console.log('check server');
        count = 6;
    } else if (curHr < 22) {
        //console.log('planning tomorow');
        count = 7;
    } else {
        //console.log('Sleep');
        count = 8;
    }
}

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    //document.getElementById("clock").innerHTML = t;
}

var run = function () {
    setInterval(
        function () {
            myTimer();
            checkToday();
            for (var i = 0; i <= (count - 1); i++) {
                time[i].style.backgroundColor = "";
            };
            time[count - 1].style.backgroundColor = "#FFDA49";
            count_check.innerHTML = 8 - (count - 1);
        }, 1000
    )
};

run();