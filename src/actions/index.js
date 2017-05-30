import axios from 'axios';
// Weather api key
const API_KEY = '5d3dfc26f533ce64c9ac9b240327bd9a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//hold the action type
//will be imported into the reducer
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	//finish the request url
	const url = `${ROOT_URL}&q=${city},uk`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}