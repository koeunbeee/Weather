import { getWeatherIcon } from '../../../utils/icon';
import NavigationIcon from '@mui/icons-material/Navigation';
import styles from './HourlyCard.module.scss';
import { HourlyData } from '../../../utils/weatherDataType';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

interface WeatherCardProps {
  hour: HourlyData;
}

const WeatherCard = ({ hour }: WeatherCardProps) => {
  const WeatherIcon = getWeatherIcon(hour.weather[0].id, hour.weather[0].icon);

  const formattedTime =
    new Date(hour.time * 1000)
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      .split(':')[0] + '시';

  const popPrecipitation = Math.round(hour.pop * 100);
  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);
  const tempInCelsius = kelvinToCelsius(hour.temp);

  return (
    <div className={styles.hourRow}>
      <span>{formattedTime}</span>
      <WeatherIcon className={styles.weatherIcon} />
      <span>{tempInCelsius}&#8451;</span>
      <div className={styles.hourRowBox}>
        <UmbrellaIcon color="primary" />
        <span>{popPrecipitation}%</span>
      </div>
      <span>{hour.rain || 0}mm</span>
      <div className={styles.hourRowBox}>
        <NavigationIcon
          color="primary"
          style={{ transform: `rotate(${hour.wind_deg}deg)` }}
        />
        <span>{hour.wind_speed}m/s</span>
      </div>
      <div className={styles.hourRowBox}>
        <WaterDropIcon color="primary" />
        <span>{hour.humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
