import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    location: null,
  },
  error: {
    location: null,
  },
  region: {
    latitude: 23.2404,
    longitude: 87.8676,
    latitudeDelta: 0.1,
    longitudeDelta: 0.05,
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationValue(state, action) {
      state.value.location = action.payload;

      const { coords } = action.payload;
      if (coords) {
        const { latitude, longitude } = coords;
        state.region.latitude = latitude;
        state.region.longitude = longitude;
      }
    },
    setLocationError(state, action) {
      state.error.location = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
  },
});

export const { setLocationValue, setLocationError, setRegion } =
  locationSlice.actions;
export const selectLocationValue = (state) => state.location.value;
export const selectLocationError = (state) => state.location.error;
export const selectRegion = (state) => state.location.region;
const locationReducer = locationSlice.reducer;
export default locationReducer;
