let dateString = "Feb 19, 2025 13:21:00";
let countDown = new Date(dateString).getTime();
let countDownDate = new Date(dateString);
let expired = document.querySelector(".expired p")
let day = document.querySelector(".day-num");
let hour = document.querySelector(".hour-num");
let minute = document.querySelector(".minute-num")
let second = document.querySelector(".second-num")

let eventDateText = document.querySelector(".event-date p");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let intervalId;

eventDateText.innerHTML = `${months[countDownDate.getMonth()]} ${countDownDate.getDate()}, ${countDownDate.getFullYear()}`

intervalId = setInterval(() => {
    let currentDate = new Date().getTime();
    let difference = countDown - currentDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    day.innerHTML = timeFormat(days);
    hour.innerHTML = timeFormat(hours);
    minute.innerHTML = timeFormat(minutes);
    second.innerHTML = timeFormat(seconds);

    if (difference <= 0) {
        clearInterval(intervalId);
        expired.innerHTML = 'Event Expired';
        // expired.style.display = "block"
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
    }

}, 1000)

const timeFormat = (time) => {
    if (time <= 9) {
        return `0${time}`;
    }
    else {
        return time;
    }
}