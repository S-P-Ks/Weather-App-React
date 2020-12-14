import "./App.css";
import { useState, useEffect } from "react";
import Weather from "./Weather";

function App() {
  const [city, setcity] = useState("Vadodara");
  const [state, setstate] = useState("Gujrat");
  const [icon, seticon] = useState(null);
  const [info, setinfo] = useState({});

  async function fetchData() {
    const fetchD = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88f9139d4c9c760f21494edcf0cb9536`
    )
      .then((res) => res.json())
      .then((data) => setinfo(data));
    console.log(info);
  }

  function setData() {
    setstate(info.sys.country);
    seticon(info.weather[0].icon);
  }

  useEffect(() => {
    fetchData();
    if (info.cod === 200) {
      setData();
    }
  }, [city]);

  function renderInfo() {
    if (info.cod === 200) {
      return (
        <Weather
          city={city}
          state={state}
          temp={info.main.temp}
          icon={icon}
          desc={info.weather[0].description}
        />
      );
    } else {
      return <h1>Loading .....</h1>;
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="search"
        value={city}
        placeholder="Enter the city Name"
        onChange={(e) => setcity(e.target.value)}
      ></input>
      <button type="submit" onClick={() => fetchData()}>
        Search
      </button>
      {renderInfo()}
    </div>
  );
}

export default App;
