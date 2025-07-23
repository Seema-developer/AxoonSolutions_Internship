 const API_KEY = 'd07d383fd1fefca98460992816c5a71b';

 function getWeather(city = null) {
    const input = document.getElementById('cityInput');
    const cityName = city || input.value.trim();
    const result = document.getElementById('weatherResult');
    const error = document.getElementById('error');
    const loading = document.getElementById('loading');

    result.innerHTML = '';
    error.innerText = '';

    if (!cityName) {
    error.innerText = 'Please enter a city name';
    return;
    }

    loading.style.display = 'block';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        if (data.cod !== 200) {
        throw new Error(data.message);
        }

        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        result.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${icon}" alt="${data.weather[0].description}">
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].main}</p>`;
        localStorage.setItem('lastCity', cityName);
    })
    .catch(err => {
        error.innerText = 'City not found or API error';
    })
    .finally(() => {
        loading.style.display = 'none';
    });
}

// Clear previous result when pagee loads
window.addEventListener('load', () => {
    document.getElementById('weatherResult').innerHTML = '';
    document.getElementById('error').innerText = '';
    document.getElementById('cityInput').value = '';
    localStorage.removeItem('lastCity');
});