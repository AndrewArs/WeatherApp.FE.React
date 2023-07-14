import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/layouts/MainLayout';
import { lazy } from 'react';
import { PATH_PAGE } from './paths';

const CreateForecastProviderPage = lazy(
  () => import('../pages/CreateForecastProvider')
);
const WeatherForecastsPage = lazy(() => import('../pages/WeatherForecasts'));
const FastestWeatherForecastPage = lazy(
  () => import('../pages/FastestWeatherForecast')
);
const WeatherForecastBySlugPage = lazy(
  () => import('../pages/WeatherForecastBySlug')
);
const ForecastProvidersPage = lazy(() => import('../pages/ForecastProviders'));
const EditForecastProvidersPage = lazy(
  () => import('../pages/EditForecastProvider')
);
const Page404 = lazy(() => import('../pages/Page404'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PATH_PAGE.root,
        children: [
          {
            path: PATH_PAGE.root,
            element: <ForecastProvidersPage />
          },
          {
            path: PATH_PAGE.forecastProviders.edit(':slug'),
            element: <EditForecastProvidersPage />
          }
        ]
      },
      {
        path: PATH_PAGE.forecasts.root,
        element: <WeatherForecastsPage />
      },
      {
        path: PATH_PAGE.forecasts.fastest,
        element: <FastestWeatherForecastPage />
      },
      {
        path: PATH_PAGE.forecasts.slug(':slug'),
        element: <WeatherForecastBySlugPage />
      },
      {
        path: PATH_PAGE.createForecastProvider,
        element: <CreateForecastProviderPage />
      },
      {
        path: PATH_PAGE.page404,
        element: <Page404 />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={PATH_PAGE.page404} />
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
