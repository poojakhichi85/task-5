 const apiKey = 'f1f261a8111924fb6aae83b1ccf16c05';
 const searchButton = document.getElementById('searchButton');
 const cityInput = document.getElementById('cityInput');
 const weatherInfo = document.getElementById('weatherInfo');

 searchButton.addEventListener('click', () => {
     const city = cityInput.value;
     if (city) {
         getWeather(city);
     }
 });

 async function getWeather(city) {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     try {
         const response = await fetch(url);
         if (!response.ok) {
             throw new Error('City not found');
         }
         const data = await response.json();
         displayWeather(data);
     } catch (error) {
         weatherInfo.style.display = 'block';
         weatherInfo.innerHTML = `<p>${error.message}</p>`;
     }
 }

 function displayWeather(data) {
     const { name, main, weather } = data;
     weatherInfo.style.display = 'block';
     weatherInfo.innerHTML = `
         <h2>${name}</h2>
         <p>Temperature: ${main.temp} °C</p>
         <p>Humidity: ${main.humidity}%</p>
         <p>Weather: ${weather[0].description}</p>
    `;
 }


