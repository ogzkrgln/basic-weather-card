import React, { Component } from 'react';
import WeatherDay from './component/WeatherDay'
import './App.css';

const myDereceArray = [
  {
    Pazar: {
      Gece:"25°C",
      Gunduz:"34°C",
      Hava:"Bulutlu",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png"
    },
    Pazartesi: {
      Gece:"12°C",
      Gunduz:"21°C",
      Hava:"Bulutsuz",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png"
    },
    Salı: {
      Gece:"-6°C",
      Gunduz:"19°C",
      Hava:"",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png"
    },
    Carsamba: {
      Gece:"24°C",
      Gunduz:"33°C",
      Hava:"",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png"
    },
    Persembe: {
      Gece:"17°C",
      Gunduz:"26°C",
      Hava:"",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png"
    },
    Cuma: {
      Gece:"24°C",
      Gunduz:"30°C",
      Hava:"",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png"
    },
    Cumartesi: {
      Gece:"14°C",
      Gunduz:"29°C",
      Hava:"",
      logo:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png"
    },

  }
]

class App extends Component {
  constructor(props) {
    super(props);
  
}

render() {
  return (
    <div className="App">
        {myDereceArray.map((item) => (<WeatherDay {...item}></WeatherDay>))}
      </div>
  );
  }
}
export default App;
