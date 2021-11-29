function displayData(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

function formatTime(now) {
  let hour = now.getHours();
  let hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  if (hours < 10) {
    hour = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = day[now.getDay()];
  return `${days} ${hour}:${minutes}`;
}
let apiKey = "4f05e6229e1535d6052a9d9d4d3d1173";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayData);

let timeElement = document.querySelector("#date-time");
let now = new Date();
timeElement.innerHTML = formatTime(now);
