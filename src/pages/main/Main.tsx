import styles from './Main.module.scss';
import CurrentWeather from '../../components/currentWeather/CurrentWeather';
import HourlyWeather from '../../components/hourlyWeather/HourlyWeather';
import ThirtyDaysWeather from '../../components/dailyWeather/DailyWeather';

const Main = () => {
  return (
    <div className={styles.whole}>
      <div className={styles.weatherSection}>
        <div className={styles.mainContent}>
          <CurrentWeather />
          <HourlyWeather />
        </div>
        <ThirtyDaysWeather />
      </div>
    </div>
  );
};

export default Main;
