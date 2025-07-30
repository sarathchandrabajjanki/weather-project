import React, { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, SetInput] = useState("");

  async function handleWeather() {
    const api_key = "e0341bef80dc2da69d6a3063fb4a9e2a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`;
    const report = await fetch(url);
    const result = await report.json();
    if (result.cod === 200) {
      setWeather(result);
    }
    else{
      alert("no city was found")
    }
  }

  return (
    <div className="app">
      <div className="search-box">
        <input
          value={input}
          onChange={(e) => SetInput(e.target.value)}
          type="text"
          placeholder="Enter city name..."
        />
        <button onClick={handleWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🌥 Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>

        </div>
      )}
      
    </div>
  );
}

export default App;
