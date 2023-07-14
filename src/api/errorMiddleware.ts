import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { openToast } from '../features/toast/toastSlice';

export const errorMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn(action);
      const errorMessage =
        ((action )?.payload?.data?.errorMessage as string) ?? 'Unknown error';
      api.dispatch(openToast({ severity: 'error', text: errorMessage }));
    }

    return next(action);
  };
