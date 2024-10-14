const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = "AM";

    if (hour>12){
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" +second : second;


    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();