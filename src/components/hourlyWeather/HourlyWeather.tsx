import { useRef } from 'react';
import styles from './HourlyWeather.module.scss';
import { useHourlyWeather } from '../../hooks/useWeather';
import WeatherCard from './hourlyCard/HourlyCard';
import Progress from '../../components/circularProgress/CircularProgress';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocationStore } from '../../store/locationStore';

const HourlyWeather = () => {
  const { lat, lon } = useLocationStore();
  const { data: hourlyData, isLoading, error } = useHourlyWeather(lat, lon);

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
            {hourlyData?.map((hour, index) => (
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
