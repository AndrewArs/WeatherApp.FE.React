import { Box, Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import { CreateForecastProviderDto } from '../api';
import { useCreateProviderMutation } from '../api/forecastProviders';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from '../router/paths';
import HttpActionTextField from '../components/HttpActionTextField';
import { closeToast } from '../features/toast/toastSlice';
import AppTextField from '../components/AppTextField';
import AppForm from '../components/AppForm';
import { useAppDispatch } from '../store/hooks';

const CreateForecastProvider = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [createProvider, { isLoading }] = useCreateProviderMutation();

  const [provider, setProvider] = useState<CreateForecastProviderDto>({
    name: '',
    url: '',
    temperaturePath: '',
    forecastTemplatePath: '',
    keyQueryParamName: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvider({ ...provider, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(closeToast());

    const result = await createProvider(provider);
    if ('error' in result) {
      return;
    }

    navigate(PATH_PAGE.root);
  };

  return (
    <AppForm onSubmit={handleSubmit}>
      {isLoading && <div>Loading...</div>}
      <AppTextField label="Name" name="name" onChange={handleChange} />
      <HttpActionTextField onChange={handleChange} value={provider.url!} />
      <AppTextField
        label="Key query param to hide"
        name="keyQueryParamName"
        onChange={handleChange}
      />
      <AppTextField
        label="Temperature json path"
        name="temperaturePath"
        onChange={handleChange}
      />
      <AppTextField
        label="Forecast template"
        name="forecastTemplatePath"
        multiline
        maxRows={10}
        onChange={handleChange}
      />
      <Box m={1} display="flex" justifyContent="center">
        <Button variant="text" type="submit" disabled={isLoading}>
          Submit
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
export default CreateForecastProvider;
