import env from '../env';
import type {
  CreateForecastProviderDto,
  ErrorDto,
  UpdateForecastProviderDto,
  WeatherForecastDto,
  WeatherForecastDtoListOfDto,
  ForecastProviderDto,
  ForecastProviderDtoListOfDto
} from './Api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: env.apiUrl
});

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  baseQuery: baseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['ForecastProviders', 'WeatherForecasts'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({})
});

export type {
  CreateForecastProviderDto,
  ErrorDto,
  UpdateForecastProviderDto,
  WeatherForecastDto,
  WeatherForecastDtoListOfDto,
  ForecastProviderDto,
  ForecastProviderDtoListOfDto
};
