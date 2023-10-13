let deadline = new Date("Oct 14, 2023 20:35:00").getTime()
let a = setInterval(function(){
    let now = new Date().getTime();
    let diff = deadline - now;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds.";

    if (diff < 0) {
        clearInterval(a);
        document.getElementById("timer").innerHTML = "BID FOR THIS ITEM IS OVER";
                
    }
}, 1000);

