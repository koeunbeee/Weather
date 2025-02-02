import { DailyWeather, DailyWeatherData } from '../weatherDataType';

export const processDailyWeather = (data: any): DailyWeatherData[] => {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD" 형식의 오늘 날짜
  console.log('data', data);

  // 섭씨로 변환하는 함수
  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  return data.list
    .reduce((acc: DailyWeatherData[], item: any) => {
      const date = item.dt_txt.split(' ')[0]; // "YYYY-MM-DD" 추출
      const time = item.dt_txt.split(' ')[1]; // "HH:MM:SS"

      // 오늘 날짜는 제외
      if (date === today) return acc;

      // 날짜가 이미 있다면 오전/오후 데이터만 설정
      let daily = acc.find((d) => d.date === date);
      if (!daily) {
        daily = {
          date,
          dayOfWeek: new Date(`${date}T00:00:00Z`).toLocaleDateString('ko-KR', {
            weekday: 'long',
            timeZone: 'UTC',
          }),
          morning: null,
          afternoon: null,
          minTemp: Infinity,
          maxTemp: -Infinity,
        };
        acc.push(daily);
      }

      // 오전 06:00 데이터 설정
      if (time.startsWith('06:00') && !daily.morning) {
        daily.morning = {
          weather: item.weather[0]
            ? { id: item.weather[0].id, icon: item.weather[0].icon }
            : { id: 0, icon: '' },
        };
      }

      // 오후 18:00 데이터 설정
      if (time.startsWith('18:00') && !daily.afternoon) {
        daily.afternoon = {
          weather: item.weather[0]
            ? { id: item.weather[0].id, icon: item.weather[0].icon }
            : { id: 0, icon: '' },
        };
      }

      // 최고 기온 / 최저 기온 업데이트 (섭씨로 변환)
      const temp = kelvinToCelsius(item.main.temp);
      daily.minTemp = Math.min(daily.minTemp, temp);
      daily.maxTemp = Math.max(daily.maxTemp, temp);

      return acc;
    }, [])
    .filter(
      (daily: DailyWeatherData) =>
        daily.morning !== null && daily.afternoon !== null
    );
};
