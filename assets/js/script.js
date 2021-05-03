
//Set Variables for Weather App

const apiKey = "0765d126b0f6a7eb158764d733ae5823";
var currentWeatherDiv = $("#currentWeather");
var forecastDiv = $("#weatherForecast");
var citiesArray;

//Add to Local Storage

if (localStorage.getItem("localWeatherSearches")){
    citiesArray = JSON.parse(localStorage.getItem("localWeatherSearches"));
    writeSearchHistory(citiesArray);
} else {
    citiesArray = [];
};



