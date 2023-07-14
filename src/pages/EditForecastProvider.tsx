import { useParams } from 'react-router-dom';
import { useGetProviderQuery } from '../api/forecastProviders';
import * as EditForecastProviderComponent from '../components/EditForecastProvider';

const EditForecastProvider = () => {
  const { slug } = useParams();
  const { isLoading, isError, data } = useGetProviderQuery({
    slug: slug!,
    hideUrlKey: false
  });

  if (data) {
    return <EditForecastProviderComponent.default data={data} />;
  }

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
    </>
  );
};
export default EditForecastProvider;
