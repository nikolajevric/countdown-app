//start script
const countdown = () => {
    const countDate = new Date('September 19, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const difference = countDate - currentDate;

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const textDay = Math.floor(difference/day);
    const textHour = Math.floor((difference%(hour*24))/hour);
    const textMinute = Math.floor((difference%hour)/minute);
    const textSecond = Math.floor((difference%minute)/second);

    document.querySelector(".day").innerText=textDay;
    document.querySelector(".hour").innerText=textHour;
    document.querySelector(".min").innerText=textMinute;
    document.querySelector(".sec").innerText=textSecond;
}

setInterval(countdown, 1000);
//end script