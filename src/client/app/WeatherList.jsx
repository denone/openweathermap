import React from 'react';
import Weather from './Weather.jsx';

class WeatherList extends React.Component {
	remove(locationId) {
		let items = this.props.data.filter(function(location){
			return locationId !== location.id;
		});
		this.props.updateList(items);
	}
	render() {
		let locationNodes = this.props.data.map(location =>
			<Weather remove={this.remove.bind(this,location.id)} city={location.name} icon={location.weather[0].icon} temp={location.main.temp} key={location.id}/>
		);
		return (
			<div className="WeatherList">
				{locationNodes}
			</div>
		);
	}
}

export default WeatherList;
