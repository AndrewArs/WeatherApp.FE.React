export const PATH_PAGE = {
  root: '/',
  forecastProviders: {
    root: '/',
    edit: (slug: string) => `providers/${slug}/edit`
  },
  forecasts: {
    root: '/forecasts',
    fastest: '/forecast/fastest',
    slug: (slug: string) => `/forecast/${slug}`
  },
  createForecastProvider: '/create-provider',
  page404: '/404'
};
