import { DailyWeather, DailyWeatherData } from '../weatherDataType';

export const processTodayWeather = (
  todayData: any
): DailyWeatherData | null => {
  const data = todayData.hourly;
  let morningData: DailyWeather | null = null;
  let afternoonData: DailyWeather | null = null;
  let minTemp = Infinity;
  let maxTemp = -Infinity;
  let morningDate: Date | null = null;
  let afternoonDate: Date | null = null;

  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  // 현재 시간대의 6시와 18시를 찾기 위한 비교
  for (let i = 0; i < data.length; i++) {
    const date = new Date(data[i].dt * 1000);
    const formattedDate = date.toISOString().split('T');
    const time = formattedDate[1].split(':')[0];

    // 오전 6시, 오후 6시 찾기
    if (time === '06' && !morningData) {
      morningData = {
        weather: data[i].weather ? data[i].weather[0] : null,
      };
      morningDate = date;
      minTemp = Math.min(minTemp, kelvinToCelsius(data[i].temp));
      maxTemp = Math.max(maxTemp, kelvinToCelsius(data[i].temp));
    }
    if (time === '18' && !afternoonData) {
      afternoonData = {
        weather: data[i].weather ? data[i].weather[0] : null,
      };
      afternoonDate = date;
      minTemp = Math.min(minTemp, kelvinToCelsius(data[i].temp));
      maxTemp = Math.max(maxTemp, kelvinToCelsius(data[i].temp));
    }

    // 오전 6시, 오후 6시를 찾으면 루프 종료
    if (morningData && afternoonData) {
      break;
    }
  }

  // 데이터가 있을 때만 반환
  if (morningData && afternoonData && morningDate && afternoonDate) {
    const formattedDate = morningDate.toISOString().split('T')[0];

    return {
      date: formattedDate,
      dayOfWeek: morningDate.toLocaleString('default', { weekday: 'long' }),
      morning: morningData,
      afternoon: afternoonData,
      minTemp,
      maxTemp,
    };
  }

  return null;
};
