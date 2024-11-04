import { create } from "zustand";

interface Place {
  id: number;
  name: string;
  category: string;
}

interface PlaceStore {
  selectedPlacesBySchedule: { [key: string]: Place[] };
  addPlace: (scheduleId: string, place: Place) => void;
  removePlace: (scheduleId: string, placeId: number) => void;
}

const usePlaceStore = create<PlaceStore>((set) => ({
  selectedPlacesBySchedule: {},
  addPlace: (scheduleId, place) =>
    set((state) => ({
      selectedPlacesBySchedule: {
        ...state.selectedPlacesBySchedule,
        [scheduleId]: [
          ...(state.selectedPlacesBySchedule[scheduleId] || []),
          place,
        ],
      },
    })),
  removePlace: (scheduleId, placeId) =>
    set((state) => ({
      selectedPlacesBySchedule: {
        ...state.selectedPlacesBySchedule,
        [scheduleId]: (state.selectedPlacesBySchedule[scheduleId] || []).filter(
          (p) => p.id !== placeId
        ),
      },
    })),
}));

export default usePlaceStore;
