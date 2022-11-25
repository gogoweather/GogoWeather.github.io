function getWeather(){
    axios.get('https://goweather.herokuapp.com/weather/vancouver')
    .then((res)=>{
        const weather = res.data;
        const currentWeather = document.getElementById('currentWeather');
        currentWeather.innerText= weather.temperature;
        
        //CURRENT CITY WEATHER DATA FORECAST
        const day1Temp = document.getElementById("day1Temp");
        day1Temp.innerText = weather.forecast[0].temperature;
        const day2Temp = document.getElementById("day2Temp");
        day2Temp.innerText = weather.forecast[1].temperature;
        const day3Temp = document.getElementById("day3Temp");
        day3Temp.innerText = weather.forecast[2].temperature;

        //CURRENT CITY WIND DATA FORECAST
        const day1Wind = document.getElementById("day1Wind");
        day1Wind.innerText= weather.forecast[0].wind;
        const day2Wind = document.getElementById("day2Wind");
        day2Wind.innerText= weather.forecast[1].wind;
        const day3Wind = document.getElementById("day3Wind");
        day3Wind.innerText= weather.forecast[2].wind;
    })
    .catch(err => console.log(err))
}

getWeather();