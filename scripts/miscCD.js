var countDownDate = new Date("May 5, 2025 14:30:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(distance + " " + days + " " + hours + " " + minutes + " " + seconds);

    document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    

    if(distance < 0){
        clearInterval(x);
        document.getElementsByTagName("html")[0].innerHTML = end;
    }
}, 250);


