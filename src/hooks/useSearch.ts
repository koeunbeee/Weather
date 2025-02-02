import { useQuery } from '@tanstack/react-query';
import { fetchSearch, fetchSearchLocations } from '../apis/locationApi';
import { uniqueCities } from '../utils/processData/processSearchData';

export const useAutocomplete = (query: string) => {
  return useQuery({
    queryKey: ['autocomplete', query],
    queryFn: () => fetchSearch(query),
    enabled: !!query,
    staleTime: 5000,
    select: (data) => uniqueCities(data),
  });
};

export const useSearchLocations = (address: string) => {
  return useQuery({
    queryKey: ['searchLocations', address],
    queryFn: () => fetchSearchLocations(address),
    enabled: !!address,
  });
};
