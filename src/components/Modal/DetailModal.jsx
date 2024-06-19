import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useModalContext } from '../../context/ModalContext';
import { Button, Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-35%, -50%)',
  width: "40%",
  height: "99%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

export default function ModalDetail({ approved, rejected, image }) {
  const { modalOpen, handleClose } = useModalContext();

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img style={{width: "100%", height: "96%", objectFit: "contain"}} src={`${image}`} alt="image" />
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" color="success" startIcon={<CheckIcon/>} onClick={approved}>Accept</Button>
            <Button variant="contained" color="error" startIcon={<CloseIcon/>} onClick={rejected}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}