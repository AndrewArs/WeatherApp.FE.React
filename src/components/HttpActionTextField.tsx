import {
  TextField,
  InputAdornment,
  IconButton,
  SxProps,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails
} from '@mui/material';
import HttpIcon from '@mui/icons-material/Http';
import axios from 'axios';
import { useState } from 'react';
import JsonViewer from './JsonViewer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch } from '../store/hooks';
import { openToast } from '../features/toast/toastSlice';

interface HttpActionTextFiledProps {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  name?: string;
  placeholder?: string;
  sx?: SxProps;
}

const HttpActionTextField = ({
  onChange,
  value,
  name = 'url',
  placeholder = 'Url',
  sx = {
    width: '100%',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}: HttpActionTextFiledProps) => {
  const dispatch = useAppDispatch();
  const [json, setJson] = useState<object | null>(null);
  const [expanded, setExpanded] = useState(true);

  const handleHttpClick = () => {
    if (!value) {
      dispatch(openToast({ severity: 'error', text: 'No URL specified!' }));
      return;
    }

    axios(value)
      .then((response) => setJson(response.data as object))
      .catch(({ message }: { message: string }) =>
        dispatch(
          openToast({
            severity: 'error',
            text: `bad response from the server: ${JSON.stringify(message)}`
          })
        )
      );
  };

  return (
    <>
      <TextField
        variant="standard"
        placeholder={placeholder}
        name={name}
        multiline
        maxRows={5}
        onChange={onChange}
        value={value}
        sx={{ ...sx, mt: 1 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleHttpClick}>
                <HttpIcon color="action" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {json && (
        <Accordion sx={{ ...sx, mt: 1, mb: 1 }} expanded={expanded}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => setExpanded(!expanded)}
          >
            <Typography>Http response example</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <JsonViewer json={json} />
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};
export default HttpActionTextField;
