import { WeatherForecastDto, WeatherForecastDtoListOfDto, api } from '.';

export const forecastApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllForecasts: build.query<WeatherForecastDtoListOfDto, void>({
      query: () => 'weather-providers/forecasts',
      providesTags: ['WeatherForecasts']
    }),
    getFastestForecast: build.query<WeatherForecastDto, void>({
      query: () => 'weather-providers/forecasts/fastest',
      providesTags: ['WeatherForecasts']
    }),
    getForecast: build.query<WeatherForecastDto, string>({
      query: (slug: string) => `weather-providers/${slug}/forecasts`,
      providesTags: ['WeatherForecasts']
    })
  })
});

export const {
  useGetAllForecastsQuery,
  useGetFastestForecastQuery,
  useGetForecastQuery
} = forecastApi;
