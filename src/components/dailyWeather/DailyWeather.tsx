import styles from './DailyWeather.module.scss';
import { useDailyWeather, useTodayWeather } from '../../hooks/useWeather';
import Progress from '../../components/circularProgress/CircularProgress'; // Progress 임포트
import { useLocationStore } from '../../store/locationStore';
import DailyCard from './dailyCard/DailyCard';

const DailyWeather = () => {
  const { lat, lon } = useLocationStore();

  const { data: dailyData, isLoading: isLoadingDaily } = useDailyWeather(
    lat,
    lon
  );
  const { data: todayData, isLoading: isLoadingToday } = useTodayWeather(
    lat,
    lon
  );

  // 로딩 상태 확인
  const isLoading = isLoadingDaily || isLoadingToday;

  return (
    <div className={styles.dailyContainer}>
      <h2>일일 날씨 예보</h2>
      <div className={styles.dailyBox}>
        {isLoading ? (
          <Progress />
        ) : (
          <>
            <DailyCard todayData={todayData} />
            {dailyData?.slice(0).map((daily, index) => (
              <DailyCard key={index} daily={daily} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default DailyWeather;
