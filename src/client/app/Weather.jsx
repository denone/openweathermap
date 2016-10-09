import React from 'react';
import WeatherBox from './WeatherBox.jsx';

class Weather extends React.Component {
	render() {
		return (
			<div className="media">
				<div className="media-left">
					<img className="media-object" src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{this.props.city} <a href="#" onClick={this.props.remove.bind(this)} className="btn btn-xs btn-danger"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> delete</a></h4>
					<p>{this.props.temp} °C</p>
				</div>
			</div>
		);
	}
}

export default Weather;
