export const getCurrentLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('이 브라우저는 위치 정보를 지원하지 않습니다.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lon: longitude });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('위치 정보 제공을 허용해야 합니다.'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('위치 정보를 가져올 수 없습니다.'));
            break;
          case error.TIMEOUT:
            reject(new Error('위치 정보를 가져오는 시간이 초과되었습니다.'));
            break;
          default:
            reject(new Error('알 수 없는 오류가 발생했습니다.'));
            break;
        }
      },
      {
        enableHighAccuracy: true, // 보다 정확한 위치 정보 사용 (배터리 소모 증가 가능)
        timeout: 10000, // 10초 안에 응답 없으면 실패 처리
        maximumAge: 60000, // 1분 동안 캐시된 위치 정보 사용
      }
    );
  });
};
