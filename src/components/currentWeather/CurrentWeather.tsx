import { ReactComponent as Water } from '../../assets/icons/drop-water.svg';
import { useCurrentWeather } from '../../hooks/useWeather';
import Progress from '../../components/circularProgress/CircularProgress';
import { weatherConditions } from '../../utils/constants';
import { getWeatherIcon } from '../../utils/icon';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useLocationStore } from '../../store/locationStore';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import styles from './CurrentWeather.module.scss';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useCurrentLocationName } from '../../hooks/useCurrentLocation';

const CurrentWeather = ({ loading }: { loading: boolean }) => {
  const { lat, lon, setLocation } = useLocationStore();
  const { fetchCurrentLocation } = useCurrentLocation();
  const { data: currentData, isLoading, error } = useCurrentWeather(lat, lon);
  const { data: locationName } = useCurrentLocationName(lon, lat);

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

  const handleResetLocation = async () => {
    try {
      const location = await fetchCurrentLocation();
      setLocation(location.lat, location.lon);
    } catch (error) {
      console.error('위치를 가져오는 데 실패했습니다:', error);
    }
  };

  return (
    <div className={styles.currentContainer}>
      {isLoading ? (
        <Progress />
      ) : error ? (
        <span>현재 날씨를 가져오는데 오류가 생겼습니다.</span>
      ) : (
        <div className={styles.currentBox}>
          <div className={styles.locationBox}>
            <span>{locationName}</span>
            <button
              onClick={handleResetLocation}
              className={styles.locationButton}
              disabled={loading}
              title="현재 위치 날씨보기"
            >
              <MyLocationIcon fontSize="large" sx={{ color: 'white' }} />
            </button>
          </div>

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
