import React from 'react';
import {styled} from '@mui/system'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CustomStyledSnackbar = styled(Snackbar)(({ theme }) => ({
    right: '20px',
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomAlert({ open, handleClose, severity, message }) {
  return (
    <CustomStyledSnackbar
      open={open}
      autoHideDuration={3000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </CustomStyledSnackbar>
  );
}

export default CustomAlert;