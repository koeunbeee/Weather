import { useState, useEffect, useRef } from 'react';
import styles from './HourlyWeather.module.scss';
import { useWeather } from '../../hooks/useWeather';
import WeatherCard from './hourlyCard/HourlyCard';
import { HourlyData } from '../../utils/weatherDataType';
import Progress from '../../components/circularProgress/CircularProgress';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface HourlyWeatherData {
  hourly: HourlyData[];
}

const HourlyWeather = () => {
  const [hourlyData, setHourlyData] = useState<HourlyWeatherData | null>(null);
  const [lon, setLon] = useState(37);
  const [lat, setLat] = useState(127);
  const { data, isLoading, error } = useWeather(lon, lat);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (data) {
      setHourlyData({
        hourly: data.hourly.map((hour: any) => ({
          time: hour.dt,
          temp: hour.temp,
          humidity: hour.humidity,
          wind_speed: hour.wind_speed,
          wind_deg: hour.wind_deg,
          weather: hour.weather,
          pop: hour.pop,
          rain: hour.rain || 0, // rain이 없는 경우 0으로 처리
        })),
      });
    }
  }, [data]);

  console.log(hourlyData);
  return (
    <div className={styles.hourlyContainer}>
      {isLoading ? (
        <Progress />
      ) : error ? (
        <p>날씨를 가져오는데 오류가 생겼습니다.</p>
      ) : (
        <div className={styles.scrollWrapper}>
          <button className={styles.scrollBtn} onClick={scrollLeft}>
            <ArrowBackIosNewIcon color="primary" />
          </button>
          <div className={styles.scrollContainer} ref={scrollRef}>
            {hourlyData?.hourly.map((hour, index) => (
              <WeatherCard key={index} hour={hour} />
            ))}
          </div>
          <button className={styles.scrollBtn} onClick={scrollRight}>
            <ArrowForwardIosIcon color="primary" />
          </button>
        </div>
      )}
    </div>
  );
};

export default HourlyWeather;
