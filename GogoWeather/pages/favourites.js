function getCity1(){
    axios.get('https://goweather.herokuapp.com/weather/hanoi')
    .then((res)=>{
        const weather = res.data;
        //Hanoi Weather
        const city1temp = document.getElementById("city1temp");
        city1temp.innerText = weather.temperature;
        //Hanoi Wind
        const city1wind = document.getElementById("city1wind");
        city1wind.innerText = weather.wind;
   
    })
    .catch(err => console.log(`${err} city 2`))
}
function getCity2(){
    axios.get('https://goweather.herokuapp.com/weather/punjab')
    .then((res)=>{
        const weather = res.data;
        //Punjab Weather
        const city2temp = document.getElementById("city2temp");
        city2temp.innerText = weather.temperature;
        //Punjab Wind
        const city2wind = document.getElementById("city2wind");
        city2wind.innerText = weather.wind;
    })
    .catch(err => console.log(`${err} city 2`))
}
function getCity3(){
    axios.get('https://goweather.herokuapp.com/weather/taipei')
    .then((res)=>{
        const weather = res.data;
        //Taipei Weather
        const city3temp = document.getElementById("city3temp");
        city3temp.innerText = weather.temperature;
        //Taipei Wind
        const city3wind = document.getElementById("city3wind");
        city3wind.innerText = weather.wind;
    })
    .catch(err => console.log(`${err} city 3`))
}
getCity1();
getCity2();
getCity3();