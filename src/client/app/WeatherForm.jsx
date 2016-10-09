import React from 'react';

class WeatherForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {city: ''};
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCityChange(e) {
		this.setState({city: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		let city = this.state.city.trim();
		if (!city) {
			return;
		}
		this.props.onCitySubmit({city: city});
		this.setState({city: ''});
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.handleSubmit}>
				<input
					className="form-control"
					type="text"
					placeholder="Enter city name"
					value={this.state.city}
					onChange={this.handleCityChange}
				/>
				<span className="input-group-btn">
            <input className="btn btn-default" type="submit" value="Get weather"/>
          </span>
			</form>
		);
	}
}

export default WeatherForm;
