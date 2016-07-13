import axios from 'axios';

const API_KEY = 'c815ab6f81bc1af1a18c82f7b370487d';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	
	const url = `${BASE_URL}&q=${city}`;
	
	const request = axios.get(url);
	
	return {
		
		type : FETCH_WEATHER,
		payload : request
		
	};
	
}