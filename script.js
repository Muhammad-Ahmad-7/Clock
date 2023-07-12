setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secTime = d.getSeconds();
    hourRotation = 30*hourTime + minuteTime/2;
    minuteRotation = 6*minuteTime;
    secRotation = 6*secTime;
    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secRotation}deg)`;
}, 1000);