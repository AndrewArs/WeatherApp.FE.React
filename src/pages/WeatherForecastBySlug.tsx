import { useParams } from 'react-router-dom';
import { useGetForecastQuery } from '../api/weatherForecasts';
import ForecastsContainer from '../components/ForecastsContainer';
import WeatherForecast from '../components/WeatherForecast';

const WeatherForecastBySlug = () => {
  const { slug } = useParams();
  const { data } = useGetForecastQuery(slug!);
  return (
    <ForecastsContainer>
      {data && <WeatherForecast data={data} />}
    </ForecastsContainer>
  );
};
export default WeatherForecastBySlug;
