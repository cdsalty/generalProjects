// alert("sanity-check");


// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p"); // assigning a child of a parent
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// The APP DATA; The WEATHER OBJECT
const weather = {};

weather.tempature = {
  unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273; // SUBTRACT 300 FOR Celsius
// API KEY
const key = "a5687a8c05e85cd1c9b04a1631190177";

// VERIFY THE USER'S BROWSER PROVIDES GEOLOCATION
if('geolocation' in navigator){ // if it works, regardless if error is present, the geolocation still works
  navigator.geolocation.getCurrentPosition(setPosition, showError); 
} else {  
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>This browser's settings prevents the support of geolocation";
}

// Next, define setPosition and error...

// Get User's Position (creating setPosition function that's already called)
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.latitude;

  getWeather(latitude, longitude);
}

// To show error if there is no geolocation service
function showError(error){
  notificationElement.style.display = "block";  
  console.log(error);
  console.log(error.message);  // User denied Geolocation
  notificationElement.innerHTML = `<p>Looks like the ${error.message}</p>`
}

// the Goody Goods, GETTING WEATHER WITH THE API
function getWeather (latitude, longitude) {
  let api = `http://www.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&id=${key}`;
  console.log(api);
}