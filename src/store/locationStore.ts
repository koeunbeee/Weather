import { create } from 'zustand';

interface LocationStore {
  lat: number;
  lon: number;
  setLocation: (lat: number, lon: number) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  lat: 37.5665,
  lon: 126.978,
  setLocation: (lat: number, lon: number) => set({ lat, lon }),
}));
