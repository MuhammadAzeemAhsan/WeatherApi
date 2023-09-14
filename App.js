import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({});



  const api={
    key:"670c56b5f8345daf3a2b0f72c909e2d8",
    base:"https://api.openweathermap.org/data/2.5/",
  }


  const searchPressed=()=>{
    fetch(`${api.base}weather?q=${search}&APPID=${api.key}`)
    .then((result)=>result.json())
    .then((res)=>{
      setWeather(res);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
            {/* Search box */}
          <input type="text" placeholder="search..."  onChange={(e)=>{
            setSearch(e.target.value);
          }}/>
          <button onClick={searchPressed} >Search</button>
        </div>

        {typeof weather.main !=="undefined" ? (
        
        <div>
        {/* Location */}
        <p>{weather.name}</p>

       

        {/* Temperature */}
        <p>{(weather.main.temp - 273.15).toFixed(2)} °C</p>

        {/* Condition sunny */}
        <p>{weather.weather[0].main}</p>
        </div>
        ):(
          ""
        )}

      </header>
    </div>
  );
}

export default App;
