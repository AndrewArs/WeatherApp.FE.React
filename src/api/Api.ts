/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateForecastProviderDto {
  name?: string | null;
  url?: string | null;
  temperaturePath?: string | null;
  forecastTemplatePath?: string | null;
  keyQueryParamName?: string | null;
}

export interface ErrorDto {
  errorMessage?: string | null;
}

export interface ForecastProviderDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  name?: string | null;
  slug?: string | null;
  url?: string | null;
  temperaturePath?: string | null;
  forecastTemplatePath?: string | null;
  keyQueryParamName?: string | null;
}

export interface ForecastProviderDtoListOfDto {
  data?: ForecastProviderDto[] | null;
}

export interface UpdateForecastProviderDto {
  name?: string | null;
  url?: string | null;
  temperaturePath?: string | null;
  forecastTemplatePath?: string | null;
  keyQueryParamName?: string | null;
}

export interface WeatherForecastDto {
  provider?: string | null;
  /** @format float */
  temperature?: number;
  weather?: string | null;
  /** @format date-time */
  updatedAt?: string;
}

export interface WeatherForecastDtoListOfDto {
  data?: WeatherForecastDto[] | null;
}
