const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";
let APIkey = "ed51bc6af7f62b357b5eb9b379704b2f";

let btn = document.querySelector(".search-icon button");
let loc = document.querySelector(".search-box input");

async function fun()
{
    let locval = loc.value.toLowerCase();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${locval}&appid=${APIkey}&units=metric`;
    let dataset = await fetch(url);
    if(dataset.status===200)
    {
        let data = await dataset.json();
        console.log(data);
        document.querySelector(".temp").innerText = Math.round(data.main.temp)+"°c";
        document.querySelector(".location").innerText = data.name;
        document.querySelector(".humidity").innerText = data.main.humidity+"%";
        document.querySelector(".windspeed").innerText = data.wind.speed+"km/h";
        
        let weather_clouds = data.weather[0].main.toLowerCase();
        let image = document.querySelector(".weather-img img");
        if(weather_clouds === "clouds")
        {
            image.src = "clouds.png";
        }
        else if(weather_clouds === "clear")
        {
            image.src = "clear.png";
        }
        else if(weather_clouds === "drizzle")
        {
            image.src = "drizzle.png";
        }
        else if(weather_clouds === "mist")
        {
            image.src = "mist.png";
        }
        else if(weather_clouds === "rain")
        {
            image.src = "rain.png";
        }
        else if(weather_clouds === "snow")
        {
            image.src = "snow.png";
        }
        loc.value = data.name;
    }
    else
    {
        console.log("invalid");
        alert("Check the Name of the City");
    }
}

btn.addEventListener("click",fun)

loc.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter")
    {
        fun();
    }
})