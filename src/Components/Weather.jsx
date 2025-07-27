import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // Update the URL to use the CORS proxy (api.allorigins.win)
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&units=imperial&appid=ea5340714282ceebc016e21f1e604141"
  )}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      // Use axios to fetch data from the proxy URL
      axios
        .get(url)
        .then((response) => {
          // Parse the JSON data returned by the proxy (since it's wrapped in `contents` key)
          const weatherData = JSON.parse(response.data.contents);
          setData(weatherData);
          console.log(weatherData); // You can remove this if you don't need the console log
        })
        .catch((error) => {
          console.error("Error fetching weather data: ", error);
        });

      setLocation("");
    }
  };

  return (
    <div className="Weather">
      <div className="containerW">
        <div className="searchW">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyDown={searchLocation}
          />
        </div>

        <div className="top">
          <div className="nameW">
            <h1>{data.name}</h1>
          </div>
          <div className="tempW">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="descriptionW">
            {data.weather ? <h1>{data.weather[0].main}</h1> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feelsW">
              {data.main ? <h1>{data.main.feels_like.toFixed()}°F</h1> : null}
              <p className="para">Feels Like</p>
            </div>
            <div className="humidityW">
              {data.main ? <h1>{data.main.humidity}%</h1> : null}
              <p className="para">Humidity</p>
            </div>
            <div className="windW">
              {data.wind ? <h1>{data.wind.speed} MPH</h1> : null}
              <p className="para">Wind Speed</p>
            </div>
          </div>
        )}

        <p className="noteW">Enter city name to check the weather.</p>
      </div>
    </div>
  );
};

export default Weather;
