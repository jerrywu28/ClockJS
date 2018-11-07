const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const updateClock = () => {
  const time = new Date();
  const hours = (time.getHours() / 24) * 360;
  const minutes = (time.getMinutes() / 60) * 360;
  const seconds = (time.getSeconds() / 60) * 360;
  hourHand.style.transform = `rotate(${hours + 90}deg)`;
  minuteHand.style.transform = `rotate(${minutes + 90}deg)`;
  secondHand.style.transform = `rotate(${seconds + 90}deg)`;
}

setInterval(updateClock, 1000)