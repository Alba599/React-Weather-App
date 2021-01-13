import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions'

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    const [responseObj, setResponseObj] = useState({});
    
   function getForecast(e) {
       e.preventDefault();
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "4318d17cf3msh3cdbd9532d30736p1187afjsnda4a11305d88",
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
       .then(response => response.json())
       .then(response => setResponseObj(response))

   }

   return (
  
    <div>
        <h2>Find Current Weather Conditions</h2>
        {/* <div>
            {JSON.stringify(responseObj)}
        </div> */}
        {/* <button onClick={getForecast}>Get Forecast</button> */}
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
        <Conditions
               responseObj={responseObj}
               />
    </div>

   )
}

export default Forecast;