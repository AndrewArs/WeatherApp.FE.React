import WeatherForecast from '../components/WeatherForecast';
import { useGetAllForecastsQuery } from '../api/weatherForecasts';
import ForecastsContainer from '../components/ForecastsContainer';

const WeatherForecasts = () => {
  const { data } = useGetAllForecastsQuery();
  return (
    <ForecastsContainer>
      {data?.data?.map((forecast) => (
        <WeatherForecast key={forecast.provider} data={forecast} />
      ))}
    </ForecastsContainer>
  );
};
export default WeatherForecasts;
