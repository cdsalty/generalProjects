// alert("sanity-check");

const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempatureElement = document.querySelector(".temperature-value p"); // assigning a child of a parent
const tempatureDescrip = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

iconElement.innerHTML = `<image src = "icons/${weather.iconId}.png"/>`;
tempatureElement.innerHTML = `${weather.teampature.value}º <span>C</span>`;
tempatureDescrip.innerHTML = weather.description;
locationElement.innerHTML = `${weather.city}, ${weather.state}`;

tempatureElement.addEventListener("click", function () {
  if(weather.tempature.unit === undefined) return;  // No data, no go
  if(weather.tempature.unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.tempature.value);
    fahrenheit = Math.floor(fahrenheit); 
    tempatureElement.innerHTML = `${fahrenheit}º <span>F</span>`
    weather.tempature.unit = "fahrenheit";
  }else{
    tempatureElement.innerHTML = `${weather.tempature.value}º <span>C</span>`;
    weather.tempature.unit = "celsius";
  }
});

weather.tempature.value = 300 - 273

function celsiusToFahrenheit(tempature) {
  return (tempature * 9/5) + 32;
}