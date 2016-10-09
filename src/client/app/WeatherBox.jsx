import React from 'react';
import WeatherList from './WeatherList.jsx';
import WeatherForm from './WeatherForm.jsx';

class WeatherBox extends React.Component {
	getLocation() {
		navigator.geolocation.getCurrentPosition(this.foundLocation);
	}

	foundLocation(position) {
		this.loadWeatherbyLocation(position);
	}

	getQuery(data, type) {
		switch (type) {
			case 'geo':
				return `${this.props.api}&lon=${data.coords.longitude}&lat=${data.coords.latitude}`;
				break;

			case 'search':
				return `${this.props.api}&q=${data.city}`;
				break;
		}
	}

	loadWeatherbyLocation(position) {
		let apiUrl = this.getQuery(position, 'geo');
		this.ajaxRequest(apiUrl);
	}

	formSuccessAction(data) {
		if (!this.state.data) {
			this.setState({data: [data]});
		} else {
			let alreadySearched = this.state.data.filter(item =>
				item.id == data.id
			);
			if (!alreadySearched.length) {
				this.setState({data: this.state.data.concat([data])});
			}
		}
	}

	ajaxRequest(uri) {
		$.ajax({
			url: uri,
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.formSuccessAction(data);
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.api, status, err.toString());
			}.bind(this)
		});
	}

	handleCitySubmit(comment) {
		let apiUrl = this.getQuery(comment, 'search');
		this.ajaxRequest(apiUrl);
	}

	constructor(props) {
		super(props);
		this.state = {data: []};
		this.foundLocation = this.foundLocation.bind(this);
		this.handleCitySubmit = this.handleCitySubmit.bind(this);
	}

	componentDidMount() {
		this.getLocation();
	}

	render() {
		return (
			<div className="weatherBox">
				<h1>Weather</h1>
				<WeatherList data={this.state.data}/>
				<WeatherForm onCitySubmit={this.handleCitySubmit}/>
			</div>
		);
	}
}
WeatherBox.defaultProps = {
	api: 'http://api.openweathermap.org/data/2.5/weather?APPID=e0ec04c1590b910c62ae59934dbcbdc0&units=metric'
};

export default WeatherBox;
