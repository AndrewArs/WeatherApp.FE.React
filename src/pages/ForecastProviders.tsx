import ForecastProvider from '../components/ForecastProvider';
import { useGetProvidersQuery } from '../api/forecastProviders';
import DialogDeleteForecastProvider from '../components/DialogDeleteForecastProvider';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { PATH_PAGE } from '../router/paths';

const ForecastProviders = () => {
  const { data, isError, isLoading } = useGetProvidersQuery();

  return (
    <>
      <DialogDeleteForecastProvider />
      {isError && <p>Some error</p>}
      {isLoading && <p>Loading...</p>}
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {data?.data?.map((provider) => {
          return <ForecastProvider key={provider.id} provider={provider} />;
        })}
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <Button sx={{ height: 40 }} href={PATH_PAGE.createForecastProvider}>
          <AddIcon />
          Add more providers
        </Button>
      </Box>
    </>
  );
};
export default ForecastProviders;
