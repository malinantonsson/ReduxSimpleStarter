import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER: 
			return [action.payload.data, ...state]; //do not manipulate the state (eg. state.push(), return a NEW array
	}
	return state;	
}