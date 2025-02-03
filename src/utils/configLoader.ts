// interface Config {
//   REACT_APP_WEATHER_API_KEY: string;
//   REACT_APP_KAKAO_API_KEY: string;
// }

export const loadConfig = async (): Promise<void> => {
  try {
    const response = await fetch('/config.json');
    if (!response.ok) {
      throw new Error('Config file could not be loaded');
    }
    const config = await response.json();
    window.config = config;
    console.log('Config loaded:', config);
  } catch (error) {
    console.error('Error loading config:', error);
    throw error;
  }
};
