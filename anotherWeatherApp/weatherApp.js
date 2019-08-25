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