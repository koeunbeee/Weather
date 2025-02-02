import axios from 'axios';

const API_KEY = window.config?.REACT_APP_KAKAO_API_KEY;

// 키워드 자동완성 (주소 검색)
export const fetchSearch = async (query: string) => {
  const url = 'https://dapi.kakao.com/v2/local/search/address.json';
  const response = await axios.get(url, {
    params: { query },
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });
  return response.data.documents;
};

// 주소로 검색 (위도, 경도 반환)
export const fetchSearchLocations = async (address: string) => {
  const url = 'https://dapi.kakao.com/v2/local/search/address.json';
  const response = await axios.get(url, {
    params: { query: address },
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });
  return response.data.documents;
};

// 현재 위치 동까지
export const fetchCurrentLocations = async (x: number, y: number) => {
  const url = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json';
  const response = await axios.get(url, {
    params: { x: x, y: y },
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });
  return response.data.documents[0].address_name;
};
