import { Box } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

export interface AppFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const AppForm = ({ children, onSubmit }: AppFormProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      component="form"
      onSubmit={onSubmit}
    >
      {children}
    </Box>
  );
};
export default AppForm;
