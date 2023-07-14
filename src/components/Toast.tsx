import { Snackbar, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeToast } from '../features/toast/toastSlice';

const Toast = () => {
  const dispatch = useAppDispatch();
  const { open, severity, text } = useAppSelector((state) => state.toast);
  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      open={open}
      autoHideDuration={2000}
      onClose={() => dispatch(closeToast())}
    >
      <Alert
        onClose={() => dispatch(closeToast())}
        severity={severity}
        sx={{ width: '70%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
export default Toast;
