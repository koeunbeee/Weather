import { CityResult } from '../searchDataType';

export const uniqueCities = (searchData: any[]): CityResult[] => {
  const uniqueCityNames = Array.from(
    new Set(searchData.map((doc: any) => doc.address?.region_1depth_name))
  );

  return uniqueCityNames.map((city) => {
    // 해당 도시에 맞는 첫 번째 문서를 찾아 x, y 좌표 추출
    const cityData = searchData.find(
      (doc: any) => doc.address?.region_1depth_name === city
    );

    return {
      region_1depth_name: city,
      x: cityData?.x,
      y: cityData?.y,
    };
  });
};
