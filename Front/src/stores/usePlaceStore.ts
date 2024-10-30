import { create } from "zustand";

interface Place {
  id: number;
  name: string;
  category: string;
}

interface PlaceStore {
  selectedPlaces: Place[];
  addPlace: (place: Place) => void;
  removePlace: (placeId: number) => void;
}

const usePlaceStore = create<PlaceStore>((set) => ({
  selectedPlaces: [],
  addPlace: (place: Place) =>
    set((state) => ({
      selectedPlaces: state.selectedPlaces.some((p) => p.id === place.id)
        ? state.selectedPlaces
        : [...state.selectedPlaces, place],
    })),
  removePlace: (placeId: number) =>
    set((state) => ({
      selectedPlaces: state.selectedPlaces.filter(
        (place) => place.id !== placeId
      ),
    })),
}));

export default usePlaceStore;
