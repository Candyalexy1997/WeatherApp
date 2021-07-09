
//Set Variables for Weather App

const apiKey = "16d9fbf74183ba3cea68239fe0d4b771";
var currentWeather = $("#currentWeather");
var forecast = $("#weatherForecast");
var citiesArray;

//Add to Local Storage

if (localStorage.getItem("localWeatherSearches")){
    citiesArray = JSON.parse(localStorage.getItem("localWeatherSearches"));
    writeSearchHistory(citiesArray);
} else {
    citiesArray = [];
};

function getCurrentWeather (cityName) {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;

    $.get(queryURL).then(function(response) {
        let currentTime = new Date(response.dt*1000);
        let weatherIcon = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

        currentWeatherDiv.html 
        <h2>${response.name}, ${response.sys.country} (${currentTime.getMonth()+1}/${currentTime.getDate()}/${currentTime.getFullYear()})
        img src= ${weatherIcon} height="70px"</h2>
        <p>Temperature: ${response.main.temp} &#176;C</p>
        <p>Humidity: ${response.main.humidity}%</p>
        <p>Wind Speed: ${response.wind.speed} m/s</p>
        , returnUVIndex(response.coord))
        createHistoryButton(response.name); </p>
}

function returnWeatherForecast (cityName) {
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${apiKey}`;

    $.get(queryURL).then(function(response){
        let forecastInfo = response.list;
        forecastDiv.empty();
        $.each(forecastInfo,function(i){
            if (!forecastInfo[i].dt_txt.includes("12:00:00")) {

            }

            let forecastDate = new Date(forecastInfo[i].dt*1000);
            let weatherIcon = `https://openweathermap.org/img/wn/${forecastInfo[i].weather[0].icon}.png`;

            forecastDiv.append(
            <div class="col-md">)
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <h4>${forecastDate.getMonth() +1/ ${forecastDate.getDate() }/${forecastDate.getFullYear()}</h4>              </div>
                        <img src= "${weatherIcon}alt='Icon'"></img>
                        <p> Temp: ${forecastInfo[i].main.temp} &#176;C</p>
                
                </div>
            }

    })
}