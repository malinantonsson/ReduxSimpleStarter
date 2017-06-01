import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WeatherList extends Component {
	constructor(props) {
		super(props);


	}

	renderWeather(cityData, index) {
		const name = cityData.city.name;
		
		return (
			<tr key={`${name}-${index}`}>
				<td>{name}</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>

			</table>
		)
	}
}

//map the state to the reducer
function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);