// libraries
import axios from 'axios';

const API_KEY  = '6c56b8d5f68ea40a65fe9b8e556cd0c1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url     = `${ROOT_URL}&q=${city},it`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
