import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class WeatherList extends Component {

	renderWeather(cityData, index) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		//const temps = [1, 2, 3, 4, 1, 5];
		console.log(temps);

		return (
			<tr key={`${name}-${index}`}>
				<td>{name}</td>
				<td>
					<Sparklines data={temps} height={120} width={180}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
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