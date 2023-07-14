import { Box, Button } from '@mui/material';
import { useState, FormEvent } from 'react';
import { ForecastProviderDto, UpdateForecastProviderDto } from '../api';
import { PATH_PAGE } from '../router/paths';
import { useNavigate } from 'react-router-dom';
import { useUpdateProviderMutation } from '../api/forecastProviders';
import HttpActionTextField from './HttpActionTextField';
import AppTextField from './AppTextField';
import AppForm from './AppForm';

const EditForecastProvider = ({ data }: { data: ForecastProviderDto }) => {
  const [provider, setProvider] = useState<UpdateForecastProviderDto>({
    forecastTemplatePath: data.forecastTemplatePath,
    keyQueryParamName: data.keyQueryParamName,
    name: data.name,
    temperaturePath: data.temperaturePath,
    url: data.url
  });

  const [updateProvider, { isLoading }] = useUpdateProviderMutation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvider({ ...provider, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void updateProvider({ body: provider, id: data.id! })
      .then(() => navigate(PATH_PAGE.forecastProviders.root))
      .catch();
  };
  return (
    <AppForm onSubmit={handleSubmit}>
      <AppTextField
        label="Name"
        name="name"
        value={provider.name}
        onChange={handleChange}
      />
      <HttpActionTextField onChange={handleChange} value={provider.url!} />
      <AppTextField
        label="Key query param to hide"
        name="keyQueryParamName"
        onChange={handleChange}
        value={provider.keyQueryParamName}
      />
      <AppTextField
        label="Temperature json path"
        name="temperaturePath"
        onChange={handleChange}
        value={provider.temperaturePath}
      />
      <AppTextField
        label="Forecast template"
        name="forecastTemplatePath"
        multiline
        maxRows={6}
        onChange={handleChange}
        value={provider.forecastTemplatePath}
      />
      <Box m={1} display="flex" justifyContent="center">
        <Button variant="text" type="submit" disabled={isLoading}>
          Update
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate(PATH_PAGE.forecastProviders.root)}
        >
          Cancel
        </Button>
      </Box>
    </AppForm>
  );
};
export default EditForecastProvider;
