const apiKey = '2deea062bff459d4ada948073ac092ac'; // Replace with your API key
const weatherContainer = document.getElementById('weather-container');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

async function getWeather() {
  try {
    const cityName = prompt('Enter city name:');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found. Please try again.');
      return;
    }

    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp}°C`;
    const description = data.weather[0].description;

    locationElement.textContent = location;
    temperatureElement.textContent = `Temperature: ${temperature}`;
    descriptionElement.textContent = `Condition: ${description}`;
    
    weatherContainer.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred. Please try again.');
  }
}

// Initial fetch on page load (optional)
getWeather();
