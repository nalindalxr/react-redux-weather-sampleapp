import { FETCH_WEATHER } from '../actions/index';
//state - state argument is not application state only yhr state that the current reducer is responsible for.
export default function(state = [],action){
	
	switch(action.type){
		
		case FETCH_WEATHER :
		return [ action.payload.data , ...state ];
		
	}
	
	return state;
}