import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { Suspense, useMemo } from 'react';
import Toast from './components/Toast';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery
} from '@mui/material';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { toggleTheme } from './features/theme/themeSlice';
import { appLocalStorage } from './appLocalStorage';

function App() {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.theme.mode);
  const modeFromStorage = appLocalStorage.themeMode.get();

  if (!modeFromStorage) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    if (prefersDarkMode && mode === 'light') {
      dispatch(toggleTheme());
    }
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode
        }
      }),
    [mode]
  );

  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toast />
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
