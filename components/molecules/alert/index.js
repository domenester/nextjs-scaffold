import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useAlert} from '@bem/shared/state/alert';

const Alert = () => {
  const {
    state: {
      alert: {
        open,
        message,
        severity
      }
    },
    actions: {updateAlert},
  } = useAlert();

  const onClose = () => {
    updateAlert({
      open: false,
      message: '',
    })
  };

  return (
    <Snackbar
      autoHideDuration={6000}
      open={open}
      onClose={onClose}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    >
      <MuiAlert variant="filled" severity={severity} elevation={6}>
        {message.toString()}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
