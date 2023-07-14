import { Box } from '@mui/material';
import { ReactNode } from 'react';

const ForecastsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        width: '100%',
        maxWidth: '950px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      {children}
    </Box>
  );
};

export default ForecastsContainer;
