export const loadConfig = async () => {
  try {
    const response = await fetch('/config.json'); // 또는 S3 URL
    const config = await response.json();
    window.config = config; // 전역 변수로 저장
  } catch (error) {
    console.error('Error loading config:', error);
  }
};
