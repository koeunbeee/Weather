import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_URL = process.env.REACT_APP_WEATHER_MAP_URL;
const DAILY_WEATHER_URL = process.env.REACT_APP_DAIRLY_WEATHER_URL;

export const fetchWeather = async (lat: number, lon: number) => {
  const url = `${WEATHER_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchDailyWeather = async (lat: number, lon: number) => {
  const url = `${DAILY_WEATHER_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
  const response = await axios.get(url);
  return response.data;
};

// 위도 N = lat, 경도 E = lon
// 0도: 북쪽 (N)
// 45도: 북동쪽 (NE)
// 90도: 동쪽 (E)
// 135도: 동남쪽 (SE)
// 180도: 남쪽 (S)
// 225도: 남서쪽 (SW)
// 270도: 서쪽 (W)
// 315도: 북서쪽 (NW)
