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

