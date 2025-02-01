import { useState, useEffect } from 'react';
import styles from './CurrentWeather.module.scss';
import { ReactComponent as Water } from '../../assets/icons/drop-water.svg';
import { useWeather } from '../../hooks/useWeather';
import Progress from '../../components/circularProgress/CircularProgress';
import { weatherConditions } from '../../utils/constants';
import { getWeatherIcon } from '../../utils/icon';
import NavigationIcon from '@mui/icons-material/Navigation';

interface currentData {
  id: number;
  main: string;
  description: string;
  icon: string;
  temp: number;
  humidity: number;
  windDirection: number;
  windSpeed: number;
}

const CurrentWeather = () => {
  const [currentData, setCurrentData] = useState<currentData | null>(null);
  const [lon, setLon] = useState(37);
  const [lat, setLat] = useState(127);

  const { data, isLoading, error } = useWeather(lon, lat);
  //useQuery 통해서 위도경도 전달해서 데이터 불러오기. 근데 현재 위치 기반으로 전부 하는거면 현재 위치 부터 알아야...

  useEffect(() => {
    if (data) {
      const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);
      const tempInCelsius = kelvinToCelsius(data.current.temp);

      setCurrentData({
        id: data.current.weather[0].id,
        main: data.current.weather[0].main,
        description: data.current.weather[0].description,
        icon: data.current.weather[0].icon,
        temp: tempInCelsius,
        humidity: data.current.humidity,
        windDirection: data.current.wind_deg,
        windSpeed: data.current.wind_speed,
      });
      console.log(currentData?.icon);
    }
  }, [data]);

  const weatherCondition = weatherConditions[String(currentData?.id)] || {
    description: '정보 없음',
    main: '정보 없음',
  };

  const WeatherIcon = getWeatherIcon(
    currentData?.id || 0,
    currentData?.icon || '01d'
  );

  const getWindDirectionLabel = (degree: number) => {
    if (degree >= 337.5 || degree < 22.5) return '북';
    if (degree >= 22.5 && degree < 67.5) return '북동';
    if (degree >= 67.5 && degree < 112.5) return '동';
    if (degree >= 112.5 && degree < 157.5) return '동남';
    if (degree >= 157.5 && degree < 202.5) return '남';
    if (degree >= 202.5 && degree < 247.5) return '남서';
    if (degree >= 247.5 && degree < 292.5) return '서';
    if (degree >= 292.5 && degree < 337.5) return '북서';
    return '';
  };

  return (
    <div className={styles.currentContainer}>
      <h3>현재 시간 날짜 날씨</h3>
      {isLoading ? (
        <Progress />
      ) : error ? (
        <span>현재 날씨를 가져오는데 오류가 생겼습니다.</span>
      ) : (
        <div className={styles.currentBox}>
          <WeatherIcon className={styles.moving} />
          <div className={styles.mainTopBox}>
            <span className={styles.tempP}>{currentData?.temp}&#8451;</span>
            <span className={styles.mainP}>{weatherCondition.main}</span>
          </div>
          <div className={styles.horizontalLine} />
          <div className={styles.mainUnderBox}>
            <div className={styles.humidityBox}>
              <Water className={styles.humidity} />
              <span>습도 {currentData?.humidity}%</span>
            </div>
            {currentData?.windSpeed === 0 ? (
              <span className={styles.noneWind}>
                현재 바람이 멈춘 상태예요.
              </span>
            ) : (
              <div className={styles.windBox}>
                <NavigationIcon
                  color="primary"
                  style={{
                    transform: `rotate(${currentData?.windDirection ?? 0}deg)`,
                  }}
                />
                <span>
                  {getWindDirectionLabel(currentData?.windDirection ?? 0)}풍
                </span>
                <span>{currentData?.windSpeed}m/s</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default CurrentWeather;
