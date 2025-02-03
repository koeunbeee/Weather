import styles from './DailyCard.module.scss';
import { DailyWeatherData } from '../../../utils/weatherDataType';
import { getWeatherIcon } from '../../../utils/icon';

interface WeatherCardProps {
  daily?: DailyWeatherData; // dailyData에 해당하는 프로퍼티
  todayData?: any; // todayData (단일 객체) 프로퍼티
}

const DailyCard = ({ daily, todayData }: WeatherCardProps) => {
  // todayData가 있을 경우 (오늘의 날씨)
  if (todayData) {
    const morningId = todayData.morning?.weather.id ?? 0;
    const morningIcon = todayData.morning?.weather.icon ?? '';
    const afternoonId = todayData.afternoon?.weather.id ?? 0;
    const afternoonIcon = todayData.afternoon?.weather.icon ?? '';
    const WeatherMorningIcon = getWeatherIcon(morningId, morningIcon);
    const WeatherAfternoonIcon = getWeatherIcon(afternoonId, afternoonIcon);

    const formattedDate = new Date();
    const formattedString = formattedDate.toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className={styles.dailyCard}>
        <span>{todayData?.dayOfWeek}</span>
        <span>{formattedString}</span>
        <div className={styles.iconBox}>
          <WeatherMorningIcon className={styles.weatherIcon} />
          <WeatherAfternoonIcon className={styles.weatherIcon} />
        </div>
        <span>
          {todayData?.minTemp} / {todayData?.maxTemp}
        </span>
      </div>
    );
  }

  // dailyData가 있을 경우 (일별 날씨)
  if (daily) {
    const morningId = daily?.morning?.weather.id ?? 0;
    const morningIcon = daily?.morning?.weather.icon ?? '';
    const afternoonId = daily?.afternoon?.weather.id ?? 0;
    const afternoonIcon = daily?.afternoon?.weather.icon ?? '';
    const WeatherMorningIcon = getWeatherIcon(morningId, morningIcon);
    const WeatherAfternoonIcon = getWeatherIcon(afternoonId, afternoonIcon);

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
          <WeatherMorningIcon className={styles.weatherIcon} />
          <WeatherAfternoonIcon className={styles.weatherIcon} />
        </div>
        <span>
          {daily?.minTemp} / {daily?.maxTemp}
        </span>
      </div>
    );
  }

  return null;
};

export default DailyCard;
