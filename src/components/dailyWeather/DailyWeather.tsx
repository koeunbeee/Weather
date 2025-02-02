import { useState, useEffect, useRef } from 'react';
import styles from './DailyWeather.module.scss';
import { useDailyWeather, useTodayWeather } from '../../hooks/useWeather';
import { DailyWeatherData } from '../../utils/weatherDataType';
import Progress from '../../components/circularProgress/CircularProgress';
import { useLocationStore } from '../../store/locationStore';
import DailyCard from './dailyCard/DailyCard';

const DailyWeather = () => {
  const { lat, lon } = useLocationStore();

  const { data: dailyData } = useDailyWeather(lat, lon);
  console.log(dailyData);
  const { data: todayData } = useTodayWeather(lat, lon);
  console.log('todayData', todayData);

  return (
    <div className={styles.dailyContainer}>
      <h2>주간 날씨 예보</h2>
      <div className={styles.dailyBox}>
        {dailyData?.map((daily, index) => (
          <DailyCard key={index} daily={daily} />
        ))}
        {/* <DailyCard /> */}
      </div>
    </div>
  );
};
export default DailyWeather;
