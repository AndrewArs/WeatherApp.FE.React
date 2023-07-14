import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Divider,
  Typography
} from '@mui/material';
import HttpIcon from '@mui/icons-material/Http';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ForecastProviderDto } from '../api';
import { useState } from 'react';
import { openDeleteDialog } from '../features/forecastProviders/forecastProvidersSlice';
import { PATH_PAGE } from '../router/paths';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';

interface ForecastProviderProps {
  provider: ForecastProviderDto;
}

const ForecastProvider = ({ provider }: ForecastProviderProps) => {
  const { id, name, slug, forecastTemplatePath, url } = provider;
  const dispatch = useAppDispatch();
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={() => setExpand(!expand)} />}
      >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, letterSpacing: '.1rem' }}
          onClick={() => setExpand(!expand)}
        >
          {name}
        </Typography>
        <ButtonGroup sx={{ alignSelf: 'end', marginRight: '2rem' }}>
          <Button onClick={() => navigate(PATH_PAGE.forecasts.slug(slug!))}>
            <HttpIcon color="action" />
          </Button>
          <Button onClick={() => navigate(PATH_PAGE.forecastProviders.edit(slug!))}>
            <EditIcon color="action" />
          </Button>
          <Button
            onClick={() => dispatch(openDeleteDialog({ id: id!, name: name! }))}
          >
            <DeleteIcon color="error" />
          </Button>
        </ButtonGroup>
      </AccordionSummary>
      <AccordionDetails>
        <Divider>Forecast template</Divider>
        <Typography sx={{ mt: 2, mb: 2 }} variant="body2">
          {forecastTemplatePath}
        </Typography>
        <Divider>Request URL</Divider>
        <Typography sx={{ mt: 2, mb: 2 }} variant="body2">
          {url}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ForecastProvider;
