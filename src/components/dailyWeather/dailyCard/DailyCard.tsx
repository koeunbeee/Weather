import styles from './DailyCard.module.scss';
import { DailyWeatherData } from '../../../utils/weatherDataType';
import { getWeatherIcon } from '../../../utils/icon';

interface WeatherCardProps {
  daily: DailyWeatherData;
}

const DailyCard = ({ daily }: WeatherCardProps) => {
  const morningId = daily?.morning?.weather.id ?? 0;
  const morningIcon = daily?.morning?.weather.icon ?? '';
  const afternoonId = daily?.afternoon?.weather.id ?? 0;
  const afternoonIcon = daily?.afternoon?.weather.icon ?? '';
  const WeatherMorningIconIcon = getWeatherIcon(morningId, morningIcon);
  const WeatherAfternoonIconIcon = getWeatherIcon(afternoonId, afternoonIcon);

  const formattedDate = new Date(daily?.date);
  const formattedString = formattedDate.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.dailyCard}>
      <span>{daily?.dayOfWeek}</span>
      <span>{formattedString}</span>
      <div className={styles.iconBox}>
        <WeatherMorningIconIcon className={styles.weatherIcon} />
        <WeatherAfternoonIconIcon className={styles.weatherIcon} />
      </div>
      <span>
        {daily?.minTemp} / {daily?.maxTemp}
      </span>
    </div>
  );
};
export default DailyCard;
