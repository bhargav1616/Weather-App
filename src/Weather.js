import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {

  const [city, setCity] = useState();

  const [weather, setWeather] = useState();

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }


  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'da47171319fae5b07ad7f171b4a23c4c'}`)
      setWeather(response)
    }
    catch (error) {
      console.log("Error Fetching Weather data", error)
    }
  }
  const handleClick = () => {
    fetchWeather();
  }
  return (
    <div className='weather-container'>
      <input type="text" placeholder='Search Your City' value={city} onChange={handleCityChange} />

      <button onClick={handleClick}>Get Weather</button>

      {weather && <>
        <div className='weather-info'>
          <h3>{weather.data.name}</h3>
          <p>Temp is : {weather.data.main.temp}</p>
          <p> {weather.data.weather[0].description} </p>
        </div>
      </>}
    </div>
  )
}

export default Weather
