import axios from 'axios';

const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

interface LocationData {
  documents: { x: string; y: string; address_name: string }[];
}

export const fetchLocations = async (address: string) => {
  const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
    address
  )}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });
  return response.data;
};
