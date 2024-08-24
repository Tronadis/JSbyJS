const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const timeLevel = document.querySelectorAll('.deadline-format h4');

  let futureDate = new Date(2024,8,7,0);

  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  // let month = futureDate.getMonth(); month = months[month];
  const month = months[futureDate.getMonth()];
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}`;

const futurTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const T = futurTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // let day = T / oneDay; day = Math.floor(day);
  const day = Math.floor(T / oneDay);
  let hours = Math.floor((T % oneDay) / oneHour);
  let minutes = Math.floor((T % oneHour) / oneMinute);
  let seconds = Math.floor((T % oneMinute) / oneSecond);

  const timeValues = [day, hours, minutes, seconds];
  function format(item){
    if(item < 10) {
      return `0${item}`;
    }
    return item;
  }
  timeLevel.forEach(function (level, index) {
    level.innerHTML = format(timeValues[index]);
  });
  if (T < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired<h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
