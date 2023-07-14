import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ToastState {
  open: boolean;
  severity: 'success' | 'info' | 'warning' | 'error';
  text: string;
}

const initialState: ToastState = {
  open: false,
  severity: 'info',
  text: ''
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action: PayloadAction<Omit<ToastState, 'open'>>) => {
      const { severity, text } = action.payload;
      state.open = true;
      state.severity = severity;
      state.text = text;
    },
    closeToast: (state) => {
      state.open = false;
    }
  }
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
