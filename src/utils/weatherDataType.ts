export interface Weather {
  id: number;
  icon: string;
}

export interface HourlyData {
  time: number; // 타임스탬프
  temp: number; // 온도 (K)
  humidity: number; // 습도
  wind_speed: number; // 풍속
  wind_deg: number; // 풍향
  weather: Weather[]; // 날씨 정보
  pop: number; // 강수 확률
  rain: number; // 강수량
}

export interface DailyData {
  date: number;
  weather: Weather[];
}
// 날짜, 오전/오후 날씨 아이콘, 최고/최저 기온

// daily.temp.min
// daily.temp.max
