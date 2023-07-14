import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Selected {
  id: string;
  name: string;
}

interface ForecastProvidersState {
  selected: Selected | null;
  showDeleteDialog: boolean;
}

const initialState: ForecastProvidersState = {
  selected: null,
  showDeleteDialog: false
};

export const forecastProvidersSlice = createSlice({
  name: 'forecastProviders',
  initialState,
  reducers: {
    openDeleteDialog: (state, action: PayloadAction<Selected>) => {
      state.selected = action.payload;
      state.showDeleteDialog = true;
    },
    closeDeleteDialog: (state) => {
      state.showDeleteDialog = false;
    }
  }
});

export const { openDeleteDialog, closeDeleteDialog } =
  forecastProvidersSlice.actions;

export default forecastProvidersSlice.reducer;
