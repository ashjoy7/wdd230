// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Specify latitude and longitude of Trier, Germany, units to imperial, and provide your API key
const apiKey = 'd61777ad7a77c0ab943a6f2d3a42d0c1';
const latitude = 49.750353334485105;
const longitude = 6.640530940896524;
const units = 'imperial';

// Define the full URL including query parameters
const fullUrl = `${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch() {
  try {
    const response = await fetch(fullUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Run the page locally and view the console output. Find the current temperature (temp) and the weather event description (weather.description), and image icon reference (weather[0].icon - 3 characters) in the data.
// Build the displayResults function to output to the given HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

// Invoke the apiFetch() function
apiFetch();
