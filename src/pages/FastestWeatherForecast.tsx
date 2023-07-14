import { useGetFastestForecastQuery } from '../api/weatherForecasts';
import ForecastsContainer from '../components/ForecastsContainer';
import WeatherForecast from '../components/WeatherForecast';

const FastestWeatherForecast = () => {
  const { data } = useGetFastestForecastQuery();
  return (
    <ForecastsContainer>
      {data && <WeatherForecast data={data} />}
    </ForecastsContainer>
  );
};
export default FastestWeatherForecast;
