// # WeatherApp
// This is a web app used to check the weather of different places.
// The default city is set as Thane.
// When you load the website you get the weather data about Thane and some commonly searched cities like Mumbai, New York, London, Delhi,etc.
// There is a weather icon, which gets updated according to the weather in your area, i.e. if it is clear, cloudy,rainy, mist,drizzling,etc.
// Their is a search bar where you must type the city name and click the search button to get the weather of that place. Below the city name you have the humidity, temperature and wind speed of that location.
// To make this webapp I have used HTML, CSS and Javascript. To get the weather data I have used the OpenWeather API, which fetches real time weather data. 
// There is a function checkweather, which takes the city name and get city weather accordingly. Also there is another function namely updatetable which creates the table by fetching weather data of commonly searched cities like  Mumbai, New York, London, Delhi,Bengaluru, etc.

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(`/weather?city=${city}`);
    const result = await response.json();

    document.querySelector(".city h1").innerHTML = result.name;
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = result.wind.speed + " Km/Hr";

    const weatherImg = document.querySelector(".city img");
    switch (result.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "images/cloudy.png";
            break;
        case 'Clear':
            weatherImg.src = "images/clear.jpeg";
            break;
        case 'Rain':
            weatherImg.src = "images/rain.jpeg";
            break;
        case 'Drizzle':
            weatherImg.src = "images/drizzle.png";
            break;
        case 'Mist':
            weatherImg.src = "images/mist.jpeg";
            break;
        default:
            weatherImg.src = 'images/clear.jpeg';
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

window.addEventListener("load", () => {
    checkWeather("Thane");
});
