let data = {   //하드코딩 한거 쓰지말고 서버에서 가져와라
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  }
  function getweather(){    //?
    const cityInput = document.querySelector('#cityInput').value;
    return API_URL_OpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=dd8f15cbaf83f68ce8479914cb4534cc`;
  }
  
  
  
  const city = document.querySelector('#city')
  const weather = document.querySelector('#weather')
  const temp = document.querySelector('#temp')
  const button = document.querySelector('#button');
  const body = document.querySelector('body');
  const wrap = document.querySelector('.wrap');

  function renderWeatherData(data) {
     const icon = document.querySelector('#icon')
     let img = document.createElement('img')
     icon.textContent = '';
     img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
     icon.append(img);
    
     city.textContent = data.name;
     weather.textContent = data.weather[0].main;
     temp.textContent = `${changetemp(data.main.temp).toFixed(1)} ℃`
     
    console.log('℃`')
    if(weather.textContent === 'Clear'){
      body.className = 'Clear'
      wrap.className = 'wrap Clear'
    }else if(weather.textContent === 'Clouds'){
      body.className = 'Clouds'
      wrap.className = 'wrap Clouds';
    }else if(weather.textContent === 'Rain'){
      body.className = 'Rain'
      wrap.className = 'wrap Rain'
    }
  }
  
  function changetemp(temp) {
    return temp = temp - 273.15;
  }
  
  
  
  
  function getData() {
    fetch(getweather())
      .then(function (resp, option) {
        return resp.json()
      })
      .then(function (json) {
        data = json;
        renderWeatherData(data)
      })
      .catch(function (error){
        alert("도시이름을 정확히 써주세요")
      })
      
     
  
     
    
        // TODO:
        // 요청이 완료되고 나면 여기서부터 날씨 데이터(json)를 사용할 수 있습니다
  }
  renderWeatherData(data);
  button.addEventListener('click', getData);