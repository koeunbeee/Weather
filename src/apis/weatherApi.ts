import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_URL = 'https://api.openweathermap.org/data/3.0/onecall?';
const DAILY_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?';

export const fetchCurrentWeather = async (lat: number, lon: number) => {
  const url = `${WEATHER_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&exclude=minutely,daily,alerts,hourly`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchHourlyWeather = async (lat: number, lon: number) => {
  const url = `${WEATHER_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&exclude=minutely,daily,alerts,current`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchDailyWeather = async (lat: number, lon: number) => {
  const url = `${DAILY_WEATHER_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
  const response = await axios.get(url);
  return response.data;
};
