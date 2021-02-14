import React from "react";

const Weather = props => {
  return(
    <div className="weather">
      { props.city &&
        <div>
          <p className="animate__animated animate__fadeInRight">
            <i className="fa fa-university" aria-hidden="true">  
            </i> Геолокация : {props.country}, {props.city}
          </p>

          <p className="animate__animated animate__fadeInRight">
            <i className="fa fa-thermometer-full" aria-hidden="true">
            </i> Температура : {props.temp}°C
          </p>

          <p className="animate__animated animate__fadeInRight">
            <i className="fa fa-tint" aria-hidden="true">
            </i>Влажность : {props.humidity}%
          </p>
          
          <p className="animate__animated animate__fadeInRight">
            <i className="fa fa-sun-o" aria-hidden="true">
            </i>Заход солнца : {props.sunset}
          </p>
        </div>
      }
      <p>{props.error}</p>

    </div>
  )
}

export default Weather;
