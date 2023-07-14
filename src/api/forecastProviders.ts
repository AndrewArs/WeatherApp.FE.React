import {
  CreateForecastProviderDto,
  ForecastProviderDto,
  ForecastProviderDtoListOfDto,
  UpdateForecastProviderDto,
  api
} from './index';

export const forecastProvidersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProvider: build.query<
      ForecastProviderDto,
      { slug: string; hideUrlKey?: boolean }
    >({
      query: ({ slug, hideUrlKey = true }) =>
        `weather-providers/${slug}?hideUrlKey=${String(hideUrlKey)}`,
      providesTags: ['ForecastProviders']
    }),
    getProviders: build.query<ForecastProviderDtoListOfDto, void>({
      query: () => 'weather-providers',
      providesTags: ['ForecastProviders']
    }),
    deleteProvider: build.mutation<void, string>({
      query(id) {
        return {
          url: `weather-providers/${id}`,
          method: 'DELETE'
        };
      },
      invalidatesTags: ['ForecastProviders']
    }),
    createProvider: build.mutation<void, CreateForecastProviderDto>({
      query(body) {
        return {
          url: `weather-providers`,
          method: 'POST',
          body
        };
      },
      invalidatesTags: ['ForecastProviders']
    }),
    updateProvider: build.mutation<
      void,
      { body: UpdateForecastProviderDto; id: string }
    >({
      query({ body, id }) {
        return {
          url: `weather-providers/${id}`,
          method: 'PUT',
          body
        };
      },
      invalidatesTags: ['ForecastProviders']
    })
  })
});

export const {
  useGetProvidersQuery,
  useDeleteProviderMutation,
  useCreateProviderMutation,
  useUpdateProviderMutation,
  useGetProviderQuery
} = forecastProvidersApi;
