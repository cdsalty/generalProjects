// alert("sanity-check");


// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p"); // assigning a child of a parent
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// The APP DATA
const weather = {};

weather.tempature = {
  unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273; // SUBTRACT 300 FOR C
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// VERIFY THE USER'S BROWSER PROVIDES GEOLOCATION



// THE PROCESS AND LOGIC:
iconElement.innerHTML = `<image src = "icons/${weather.iconId}.png"/>`;
tempElement.innerHTML = `${weather.teampature.value}º <span>C</span>`;
descElement.innerHTML = weather.description;
locationElement.innerHTML = `${weather.city}, ${weather.state}`;

tempElement.addEventListener("click", function () {
  if(weather.tempature.unit === undefined) return;  // No data, no go
  if(weather.tempature.unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.tempature.value);
    fahrenheit = Math.floor(fahrenheit); 
    tempElement.innerHTML = `${fahrenheit}º <span>F</span>`
    weather.tempature.unit = "fahrenheit";
  }else{
    tempElement.innerHTML = `${weather.tempature.value}º <span>C</span>`;
    weather.tempature.unit = "celsius";
  }
});

weather.tempature.value = 300 - 273

function celsiusToFahrenheit(tempature) {
  return (tempature * 9/5) + 32;
}