export {};

declare global {
  interface Window {
    config?: {
      REACT_APP_WEATHER_API_KEY: string;
      REACT_APP_KAKAO_API_KEY: string;
    };
  }
}
