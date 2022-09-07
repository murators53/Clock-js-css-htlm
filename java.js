setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsRadio = currentDate.getSeconds() / 60;
    const minutesRadio = (secondsRadio + currentDate.getMinutes()) / 60;
    const hoursRadio = (minutesRadio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRadio);
    setRotation(minuteHand, minutesRadio);
    setRotation(hourHand, hoursRadio);
}

function setRotation(element , rotationRatio){
    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock();