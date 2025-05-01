var countDownDate = new Date("May 5, 2025 14:30:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if(distance < 0){
        clearInterval(x);
        document.getElementsByTagName("html")[0].innerHTML = end;
    }
}, 250);


