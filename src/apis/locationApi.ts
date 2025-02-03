import axios from 'axios';

// API 키를 가져오는 함수
const getApiKey = () => {
  const apiKey = window.config?.REACT_APP_KAKAO_API_KEY;
  if (!apiKey) {
    throw new Error('Kakao API key is not configured');
  }
  return apiKey;
};

// 키워드 자동완성 (주소 검색)
export const fetchSearch = async (query: string) => {
  const url = 'https://dapi.kakao.com/v2/local/search/address.json';
  const response = await axios.get(url, {
    params: { query },
    headers: {
      Authorization: `KakaoAK ${getApiKey()}`,
    },
  });
  return response.data.documents;
};

// 주소로 검색 (위도, 경도 반환)임
export const fetchSearchLocations = async (address: string) => {
  const url = 'https://dapi.kakao.com/v2/local/search/address.json';
  const response = await axios.get(url, {
    params: { query: address },
    headers: {
      Authorization: `KakaoAK ${getApiKey()}`,
    },
  });
  return response.data.documents;
};

// 현재 위치 동까지
export const fetchCurrentLocations = async (x: number, y: number) => {
  const url = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json';
  const response = await axios.get(url, {
    params: { x, y },
    headers: {
      Authorization: `KakaoAK ${getApiKey()}`,
    },
  });
  return response.data.documents[0].address_name;
};
