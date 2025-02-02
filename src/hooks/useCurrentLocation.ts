import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentLocation } from '../utils/getCurrentLocation';
import { fetchCurrentLocations } from '../apis/locationApi';
import { useLocationStore } from '../store/locationStore';

export const useCurrentLocation = () => {
  const { setLocation } = useLocationStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentLocation = useCallback(async (): Promise<{
    lat: number;
    lon: number;
  }> => {
    setLoading(true);
    setError(null);

    try {
      const location = await getCurrentLocation();
      setLocation(location.lat, location.lon);
      localStorage.setItem('currentLocation', JSON.stringify(location));
      return location;
    } catch (err) {
      setError((err as Error).message);
      console.error('위치를 가져오는 데 실패했습니다:', err);

      // 기본 위치 (서울) 설정
      const defaultLocation = { lat: 37.5665, lon: 126.978 };
      setLocation(defaultLocation.lat, defaultLocation.lon);
      localStorage.setItem('currentLocation', JSON.stringify(defaultLocation));

      return defaultLocation;
    } finally {
      setLoading(false);
    }
  }, [setLocation]);

  useEffect(() => {
    const storedLocation = localStorage.getItem('currentLocation');
    if (storedLocation) {
      const { lat, lon } = JSON.parse(storedLocation);
      setLocation(lat, lon);
    } else {
      fetchCurrentLocation();
    }
  }, [fetchCurrentLocation, setLocation]);

  return { fetchCurrentLocation, loading, error };
};

/* 카카오는 lon, lat 순서: 위도 경도 반대로 써야 함 */
export const useCurrentLocationName = (x: number, y: number) => {
  return useQuery({
    queryKey: ['currentLocationName', x, y],
    queryFn: () => fetchCurrentLocations(x, y),
  });
};
