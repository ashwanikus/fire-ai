import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light', // Initialize from localStorage or default to 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme); // Save preference to localStorage
      document.documentElement.setAttribute('data-theme', state.theme); // Apply theme to document
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', state.theme); // Save preference to localStorage
      document.documentElement.setAttribute('data-theme', state.theme); // Apply theme to document
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
