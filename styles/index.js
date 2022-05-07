document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Kirov');
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0f6103e77f8902849ecaae88b6a01698&units=metric')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector('.city').innerText = weather.name;
            document.querySelector('.tempValue').innerHTML = Math.round(weather.main.temp) + '&deg;';
            document.querySelector('.hi-low').innerHTML = Math.round(weather.main.temp_max) + '&deg;' + " / " + Math.round(weather.main.temp_min) + '&deg;';
            document.querySelector('.weather').innerText = weather.weather[0].description;
        })
        .catch(err => console.log(err));
}