// Main.tsx
import { useState, useEffect } from 'react';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import styles from './Main.module.scss';
import CurrentWeather from '../../components/currentWeather/CurrentWeather';
import HourlyWeather from '../../components/hourlyWeather/HourlyWeather';
import ThirtyDaysWeather from '../../components/dailyWeather/DailyWeather';
import LocationSearchPopup from '../../components/locationSearch/LocationSearchPopup';
import SearchIcon from '@mui/icons-material/Search';

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { fetchCurrentLocation, loading } = useCurrentLocation();

  useEffect(() => {
    fetchCurrentLocation();
  }, [fetchCurrentLocation]);

  return (
    <div className={styles.whole}>
      <div className={styles.weatherSection}>
        <button
          onClick={() => setIsPopupOpen(true)}
          className={styles.searchButton}
        >
          <SearchIcon color="secondary" fontSize="large" />
        </button>
        {isPopupOpen && (
          <LocationSearchPopup onClose={() => setIsPopupOpen(false)} />
        )}
        <div className={styles.mainContent}>
          <CurrentWeather loading={loading} />
          <HourlyWeather />
        </div>
        <ThirtyDaysWeather />
      </div>
    </div>
  );
};

export default Main;
