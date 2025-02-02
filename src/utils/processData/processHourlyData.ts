import { HourlyData } from '../weatherDataType';

export const processHourlyWeather = (hourlyData: any[]): HourlyData[] => {
  return hourlyData.map((hour: any) => ({
    time: hour.dt,
    temp: hour.temp,
    humidity: hour.humidity,
    wind_speed: hour.wind_speed,
    wind_deg: hour.wind_deg,
    weather: hour.weather,
    pop: hour.pop,
    rain: hour.rain || 0,
  }));
};
