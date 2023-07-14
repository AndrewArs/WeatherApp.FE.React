import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useDeleteProviderMutation } from '../api/forecastProviders';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeDeleteDialog } from '../features/forecastProviders/forecastProvidersSlice';
import { openToast } from '../features/toast/toastSlice';

const DialogDeleteForecastProvider = () => {
  const [deleteProvider] = useDeleteProviderMutation();
  const dispatch = useAppDispatch();
  const { selected, showDeleteDialog } = useAppSelector(
    (state) => state.forecastProvider
  );

  const handleDelete = async () => {
    await deleteProvider(selected!.id);
    dispatch(closeDeleteDialog());
    dispatch(openToast({ severity: 'info', text: 'Successfully deleted' }));
  };
  const handleClose = () => {
    dispatch(closeDeleteDialog());
  };

  return (
    <Dialog open={showDeleteDialog} onClose={handleClose}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want delete {selected?.name} provider?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleDelete}>
          Yes
        </Button>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogDeleteForecastProvider;
