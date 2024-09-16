import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCountries: JSON.parse(localStorage.getItem("selectedCountries")) || []
};

const selectedCountriesSlice = createSlice({
  name: 'selectedCountries',
  initialState,
  reducers: {
    
    addCountry: (state, action) => {
      const newCountry = action.payload;
      
      const exists = state.selectedCountries.find(
        (country) => country.cca2 === newCountry.cca2
      );
      if (!exists) {
        state.selectedCountries.push(newCountry);
      }
    },
    
    removeCountry: (state, action) => {
      const countryCode = action.payload;
      state.selectedCountries = state.selectedCountries.filter(
        (country) => country.cca2 !== countryCode
      );
    },
  },
});


export const { addCountry, removeCountry } = selectedCountriesSlice.actions;


export default selectedCountriesSlice.reducer;
