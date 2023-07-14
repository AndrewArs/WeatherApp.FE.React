import { createSlice } from '@reduxjs/toolkit';
import { appLocalStorage } from '../../appLocalStorage';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: appLocalStorage.themeMode.get() ?? 'dark'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      appLocalStorage.themeMode.set(state.mode);
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
