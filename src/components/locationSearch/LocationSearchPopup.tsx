import { useState } from 'react';
import { useLocationStore } from '../../store/locationStore';
import { useAutocomplete } from '../../hooks/useSearch';
import styles from './LocationSearchPopup.module.scss';
import Progress from '../circularProgress/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';

interface CityResult {
  region_1depth_name: string; // 도시 이름
  x: string; // 경도
  y: string; // 위도
}

const LocationSearchPopup = ({ onClose }: { onClose: () => void }) => {
  const { setLocation } = useLocationStore();
  const [query, setQuery] = useState('');

  const { data: citySuggestions, isLoading, isError } = useAutocomplete(query);

  const handleSelectLocation = (city: CityResult) => {
    const { x, y } = city;
    setLocation(parseFloat(y), parseFloat(x));
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="도시명을 입력하세요"
          className={styles.searchInput}
        />

        {isLoading && (
          <div>
            <Progress />
          </div>
        )}
        {isError && <div>검색 중 오류가 발생했습니다.</div>}

        <ul className={styles.suggestionsList}>
          {citySuggestions?.map((city: CityResult, index: number) => (
            <li
              key={index}
              onClick={() => handleSelectLocation(city)}
              className={styles.suggestionItem}
            >
              {city.region_1depth_name}
            </li>
          ))}
        </ul>

        <button onClick={onClose} className={styles.closeButton}>
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};

export default LocationSearchPopup;
