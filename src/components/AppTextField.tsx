import { SxProps, TextField } from '@mui/material';

export interface AppTextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  label: string;
  multiline?: boolean;
  maxRows?: number;
  value?: string | null;
  sx?: SxProps;
}

const AppTextField = ({
  onChange,
  name,
  label,
  multiline,
  maxRows,
  value,
  sx = {
    width: '100%',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}: AppTextFieldProps) => {
  return (
    <TextField
      label={label}
      name={name}
      multiline={multiline}
      maxRows={maxRows}
      variant="standard"
      onChange={onChange}
      sx={sx}
      value={value}
      fullWidth
    />
  );
};
export default AppTextField;
