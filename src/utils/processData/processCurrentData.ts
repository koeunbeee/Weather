import { CurrentData } from '../weatherDataType';

export const processCurrentWeather = (data: any): CurrentData => {
  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  return {
    id: data.current.weather[0].id,
    main: data.current.weather[0].main,
    description: data.current.weather[0].description,
    icon: data.current.weather[0].icon,
    temp: kelvinToCelsius(data.current.temp),
    humidity: data.current.humidity,
    windDirection: data.current.wind_deg,
    windSpeed: data.current.wind_speed,
  };
};
