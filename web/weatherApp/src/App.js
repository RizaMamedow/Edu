import React from 'react';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Form from './components/Form';

const API_KEY = '05fe9573bd5b6617bbab42b23aff159d';


class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const API_CITY = e.target.elements.city.value;
    if (API_CITY) {
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${API_CITY}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();
      console.log(data);

      const date = new Date();
      const sunset = data.sys.sunset;
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        sunset: sunset_date,
        error: undefined
      });
      if (!data.sys.sunset) {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          sunset: undefined,
          error: 'Введите Город'
        });
      }

    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        sunset: undefined,
        error: 'Введите Город'
      });
    }
  }
  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container ">
            <div className="row">
              <div className="col-sm-5 clock">
                <div className="titleClock">
                  <h6>Время Сейчас</h6>
                </div>
                <Clock />
              </div>
              <div className="col-sm-7 form">
                <Form weatherFunc={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
