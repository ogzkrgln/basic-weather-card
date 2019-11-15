import React, { Component } from 'react';
import './WeatherDay.css';

class WeatherDay extends Component {
render() {
  return (
    <div className="App">
      <h1>Constantinepolis</h1>
      <ul>
        <div className="list">
        <li><p>Pazar</p> <br/>
            <img src={this.props.Pazar.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Pazar.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Pazar.Gunduz}</span>
            </div>
            </li>
            </div>
        <div className="list">
        <li><p>Pazartesi</p> <br/>
            <img src={this.props.Pazartesi.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Pazartesi.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Pazartesi.Gunduz}</span>
            </div>
            </li>
            </div>
        <div className="list">
        <li><p>Salı</p> <br/>
            <img src={this.props.Salı.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Salı.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Salı.Gunduz}</span>
            </div>
            </li>
            </div>
        <div className="list">
        <li><p>Carsamba</p> <br/>
            <img src={this.props.Carsamba.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Carsamba.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Carsamba.Gunduz}</span>
            </div>
            </li>
        </div>
        <div className="list">
        <li><p>Persembe</p> <br/>
            <img src={this.props.Persembe.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Persembe.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Persembe.Gunduz}</span>
            </div>
            </li>
            </div>
        <div className="list">
        <li><p>Cuma</p> <br/>
            <img src={this.props.Cuma.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Cuma.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Cuma.Gunduz}</span>
            </div>
            </li>
        </div>
        <div className="list">
            <li><p>Cumartesi</p> <br/>
            <img src={this.props.Cumartesi.logo}/> <br/>
            <div className="list-GG">
            <span>Gece<br/>
            {this.props.Cumartesi.Gece}</span>
            </div>
            <div className="list-GG"><span>Gunduz<br/>
            {this.props.Cumartesi.Gunduz}</span>
            </div>
            </li>
            </div>
      </ul>
    </div>
  );
}
}
export default WeatherDay;
