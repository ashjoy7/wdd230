// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const forecastContainer = document.querySelector('.forecast');

// Declare constants for OpenWeatherMap API URLs
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// Specify latitude and longitude of Huachuca City, Arizona, units to imperial, and provide your API key
const apiKey = 'd61777ad7a77c0ab943a6f2d3a42d0c1';
const latitude = 31.6230; // Latitude of Huachuca City, Arizona
const longitude = -110.3474; // Longitude of Huachuca City, Arizona
const units = 'imperial';

// Define the full URL including query parameters for current weather
const weatherFullUrl = `${weatherUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define the full URL including query parameters for weather forecast
const forecastFullUrl = `${forecastUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display weather forecast
function displayForecast(data) {
  const forecasts = data.list.filter((item, index) => index % 8 === 0); // Selecting every 24-hour forecast
  forecastContainer.innerHTML = ''; // Clear previous forecast data
  forecasts.forEach(forecast => {
    const date = new Date(forecast.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    const temp = Math.round(forecast.main.temp);
    const desc = forecast.weather[0].description;
    const icon = forecast.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    const forecastHtml = `
      <div class="forecast-item">
        <p>${day}</p>
        <img src="${iconUrl}" alt="${desc}">
        <p>${temp}&deg;F</p>
      </div>
    `;
    forecastContainer.innerHTML += forecastHtml;
  });
}

// Function to display current weather
function displayWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  weatherDesc.textContent = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
}

// Fetch current weather and forecast data, then display them
async function fetchData() {
  const weatherData = await apiFetch(weatherFullUrl);
  const forecastData = await apiFetch(forecastFullUrl);
  if (weatherData && forecastData) {
    displayWeather(weatherData);
    displayForecast(forecastData);
  }
}

// Invoke the fetchData() function
fetchData();
