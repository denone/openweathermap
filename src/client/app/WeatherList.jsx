import React from 'react';
import Weather from './Weather.jsx';

class WeatherList extends React.Component {
	render() {
		let locationNodes = this.props.data.map(location =>
			<Weather city={location.name} icon={location.weather[0].icon} temp={location.main.temp} key={location.id}/>
		);
		return (
			<div className="WeatherList">
				{locationNodes}
			</div>
		);
	}
}

export default WeatherList;
