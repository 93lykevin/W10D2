import React from 'react'

class Weather extends React.Component{ 
  constructor(props) {
    super(props);

    this.state = {location: navigator.geolocation.getCurrentPosition}
  }

  render(){
    this.fetchWeather(this.state.location);
    return(
      <div>
        Hello
      </div>
    );
  }
  
  fetchWeather(location) {
    return $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=94111,us&appid=2c07354b05013eafe748a82a905479db'
    }).then(response => {
      console.log(response);
    })
  };

}

export default Weather;