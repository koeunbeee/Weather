import { useQuery } from 'react-query';
import {
  fetchCurrentWeather,
  fetch30DaysWeather,
  fetchHourlyWeather,
} from '../apis/weatherApi';

export const useCurrentWeather = (lat: number, lon: number) => {
  return useQuery(
    ['currentWeather', lat, lon],
    () => fetchCurrentWeather(lat, lon),
    {
      staleTime: 60000,
      refetchOnWindowFocus: false,
    }
  );
};

export const use30DaysWeather = (lat: number, lon: number) => {
  return useQuery(
    ['30DaysWeather', lat, lon],
    () => fetch30DaysWeather(lat, lon),
    {
      staleTime: 60000 * 60,
      refetchOnWindowFocus: false,
    }
  );
};

export const useHourlyWeather = (lat: number, lon: number) => {
  return useQuery(
    ['hourlyWeather', lat, lon],
    () => fetchHourlyWeather(lat, lon),
    {
      staleTime: 60000,
      refetchOnWindowFocus: false,
    }
  );
};
