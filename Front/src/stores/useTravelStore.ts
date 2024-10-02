import { create } from "zustand";
import { City } from "../pages/Cities";

interface TravelStore {
  selectedCities: City[];
  selectedDates: Date[];
  setSelectedCities: (cities: City[]) => void;
  addCity: (city: City) => void;
  removeCity: (cityId: number) => void;
  setSelectedDates: (dates: Date[] | ((prev: Date[]) => Date[])) => void;
  reset: () => void;
}

const initialState = {
  selectedCities: [],
  selectedDates: [],
};

const remove = (array: City[], id: number) => array.filter((item) => item.id !== id);

const useTravelStore = create<TravelStore>((set) => ({
  ...initialState,
  setSelectedCities: (cities) => set({ selectedCities: cities }),
  addCity: (city) =>
    set((state) => ({ selectedCities: [...state.selectedCities, city] })),
  removeCity: (cityId) =>
    set((state) => ({
      selectedCities: state.selectedCities.filter((city) => city.id !== cityId),
    })),

  setSelectedDates: (dates) =>
    set((state) => ({
      selectedDates:
        typeof dates === "function" ? dates(state.selectedDates) : dates,
    })),
  reset: () => set(initialState),
}));

export default useTravelStore;
