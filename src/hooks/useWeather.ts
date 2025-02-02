import { useQuery } from '@tanstack/react-query';
import {
  fetchCurrentWeather,
  fetchDailyWeather,
  fetchHourlyWeather,
} from '../apis/weatherApi';
import { processDailyWeather } from '../utils/processData/processDailyData';
import { processHourlyWeather } from '../utils/processData/processHourlyData';
import { processCurrentWeather } from '../utils/processData/processCurrentData';
import { processTodayWeather } from '../utils/processData/processTodayData';

export const useCurrentWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['currentWeather', lat, lon],
    queryFn: () => fetchCurrentWeather(lat, lon),
    staleTime: 60000,
    refetchOnWindowFocus: false,
    select: (data) => processCurrentWeather(data),
  });
};

export const useHourlyWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['hourlyWeather', lat, lon],
    queryFn: () => fetchHourlyWeather(lat, lon),
    staleTime: 60000,
    refetchOnWindowFocus: false,
    select: (data) => processHourlyWeather(data.hourly),
  });
};

export const useTodayWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['todayWeather', lat, lon],
    queryFn: () => fetchHourlyWeather(lat, lon),
    staleTime: 60000,
    refetchOnWindowFocus: false,
    select: (data) => processTodayWeather(data),
  });
};

export const useDailyWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['dailyWeather', lat, lon],
    queryFn: () => fetchDailyWeather(lat, lon),
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
    select: (data) => processDailyWeather(data),
  });
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
