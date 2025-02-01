import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../apis/weatherApi';

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['currentWeather', lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

export const useDailyWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['dailyWeather', lat, lon],
    queryFn: () => fetchWeather(lat, lon),

    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
  });
};
