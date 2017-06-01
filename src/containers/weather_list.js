import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>City</tr>
					<tr>Temperature</tr>
					<tr>Pressure</tr>
					<tr>Humidity</tr>
				</thead>
				<tbody>

					
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