import React from "react";

function Weather({ city, state, temp, icon, desc }) {
  console.log(icon);
  return (
    <div>
      <h1>Name : {city}</h1>
      <h3>Country : {state}</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
      <h3>Temperature : {temp} &#8457; </h3>
      <h3>Description : {desc}</h3>
    </div>
  );
}

export default Weather;
