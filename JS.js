function Dupdate() {
    currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString();
    document.getElementById("date").innerHTML = formattedDate;
}
setInterval(Dupdate, 1000);

//for date update

function Tupdate() {
    currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString();
    document.getElementById("time").innerHTML = formattedTime;
}
setInterval(Tupdate, 1000);

//for time update

//weather data


function displayWeather(data) {
    let temperature=Math.floor((data.main.temp)-273.15);
    let cloudcover = data.clouds.all; 
    let visibility = data.visibility;
    let sunrise = data.sys.sunrise;  
    let sunset = data.sys.sunset;   
    let location = data.name; 
    let description = data.weather[0].description;
    let tempmin =Math.floor((data.main.temp_min)-273.15);
    let tempmax =Math.floor((data.main.temp_max)-273.15);
    let humidity = data.main.humidity;
    let airpressure = data.main.pressure;
    let windspeed = data.wind.speed;

        // Convert Unix timestamp to Date object
  let sunriseTime = new Date(sunrise * 1000);

  // Get local time string in desired format
  let formattedSunriseTime = sunriseTime.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });

  let sunsetTime = new Date(sunset * 1000);

  let formattedSunsettime = sunsetTime.toLocaleTimeString("en-us", {hour:'numeric',minute:'numeric', hour12: true});



    document.getElementById('temp').innerHTML=`${temperature}&#8451`;
    document.getElementById('mintemp').innerHTML=`min.temperature: ${tempmin}&#8451`;
    document.getElementById('maxtemp').innerHTML=`max.temperature: ${tempmax}&#8451`;
    document.getElementById('cloudcover').innerHTML=`cloud coverage: ${cloudcover} % `;
    document.getElementById('humidity').innerHTML=`humidity: ${humidity}% `;
    document.getElementById('risetime').innerHTML=`sunrise time: ${formattedSunriseTime}`;
    document.getElementById('settime').innerHTML=`sunset time: ${ formattedSunsettime}`;
    document.getElementById('location').innerHTML=`${location}`;
    document.getElementById('airpressure').innerHTML=`pressure:${airpressure} hPa `;
    document.getElementById('windspeed').innerHTML=`windspeed :${windspeed} km\h`;
    document.getElementById('visibility').innerHTML=`visibility:${visibility} meter's `;
    document.getElementById('description').innerHTML=`${description}`;

    //-------------------------mobile responsive

    document.getElementById('temp1').innerHTML=`${temperature}&#8451`;
    document.getElementById('mintemp1').innerHTML=`min.temperature: ${tempmin}&#8451`;
    document.getElementById('maxtemp1').innerHTML=`max.temperature: ${tempmax}&#8451`;
    document.getElementById('cloudcover1').innerHTML=`cloud coverage: ${cloudcover} % `;
    document.getElementById('humidity1').innerHTML=`humidity: ${humidity}% `;
    document.getElementById('location1').innerHTML=`${location}`;
    document.getElementById('airpressure1').innerHTML=`pressure:${airpressure} hPa `;
    document.getElementById('windspeed1').innerHTML=`windspeed :${windspeed} km\h`;
    document.getElementById('visibility1').innerHTML=`visibility:${visibility} meter's `;
    document.getElementById('description1').innerHTML=`${description}`;
    


}

  



function weatherData() {
    cname = city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(weather => weather.json()).then(data => displayWeather(data));
}

function getWeatherByLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data=>data.json()).then(data=>displayWeather(data));

    });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  