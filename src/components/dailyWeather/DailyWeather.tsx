import { useState, useEffect, useRef } from 'react';
import styles from './DailyWeather.module.scss';
import { useWeather } from '../../hooks/useWeather';
import Progress from '../../components/circularProgress/CircularProgress';

const DailyWeather = () => {
  const [dailyData, setDailyData] = useState<null>(null);
  const [lon, setLon] = useState(37);
  const [lat, setLat] = useState(127);
  const { data, isLoading, error } = useWeather(lon, lat);

  return (
    <div className={styles.dailyContainer}>
      <h2>주간 날씨 예보</h2>
      <div className={styles.dailyBox}>
        <div className={styles.dailyCard}>
          <span>요일</span>
          <span>1월 1일</span>
          <span>오전 날씨 아이콘</span>
          <span>오후 날씨 아이콘</span>
          <span>최저/최고기온</span>
        </div>
        <div className={styles.dailyCard}>
          <span>요일</span>
          <span>1월 1일</span>
          <span>오전 날씨 아이콘</span>
          <span>오후 날씨 아이콘</span>
          <span>최저/최고기온</span>
        </div>
        <div className={styles.dailyCard}>
          <span>요일</span>
          <span>1월 1일</span>
          <span>오전 날씨 아이콘</span>
          <span>오후 날씨 아이콘</span>
          <span>최저/최고기온</span>
        </div>
        <div className={styles.dailyCard}>
          <span>요일</span>
          <span>1월 1일</span>
          <span>오전 날씨 아이콘</span>
          <span>오후 날씨 아이콘</span>
          <span>최저/최고기온</span>
        </div>
        <div className={styles.dailyCard}>
          <span>요일</span>
          <span>1월 1일</span>
          <span>오전 날씨 아이콘</span>
          <span>오후 날씨 아이콘</span>
          <span>최저/최고기온</span>
        </div>
      </div>
    </div>
  );
};
export default DailyWeather;
