const clockContainer = document.querySelector(".js-clock");
const clocktTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktTitle.innerText = `${hours < 10
        ? `0${hours}`
        : hours}:${minutes < 10
            ? `0${minutes}`
            : minutes}:${seconds < 9
                ? `0${seconds}`
                : seconds}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();