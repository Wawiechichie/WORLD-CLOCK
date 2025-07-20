function updateTime(){

let harareElement = document.querySelector("#harare");
let harareDateElement = harareElement.querySelector(".date")
let harareTimeElement = harareElement.querySelector(".time")
let harareTime = moment().tz("Africa/Harare");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = `${harareTime.format('h:mm:ss')} <small>${harareTime.format("A")}</small>`;

let johannesburgElement = document.querySelector("#johannesburg");
let johannesburgDateElement = johannesburgElement.querySelector(".date")
let johannesburgTimeElement = johannesburgElement.querySelector(".time")
let johannesburgTime = moment().tz("Africa/johannesburg");

johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
johannesburgTimeElement.innerHTML = `${johannesburgTime.format('h:mm:ss')} <small>${johannesburgTime.format("A")}</small>`;

let cardiffElement = document.querySelector("#cardiff");
let cardiffDateElement = cardiffElement.querySelector(".date")
let cardiffTimeElement = cardiffElement.querySelector(".time")
let cardiffTime = moment().tz("Europe/London");

cardiffDateElement.innerHTML = cardiffTime.format("MMMM Do YYYY");
cardiffTimeElement.innerHTML = `${cardiffTime.format('h:mm:ss')} <small>${cardiffTime.format("A")}</small>`;

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date")
let sydneyTimeElement = sydneyElement.querySelector(".time")
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = `${sydneyTime.format('h:mm:ss')} <small>${sydneyTime.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
if(cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess();
}

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/"> Home Page</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change",updateCity);