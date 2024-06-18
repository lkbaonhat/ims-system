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

export default function ModalDetail() {
  const { modalOpen, handleClose, pdfFile } = useModalContext();

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img style={{width: "100%", height: "96%", objectFit: "contain"}} src="https://firebasestorage.googleapis.com/v0/b/ims-system-e4f27.appspot.com/o/image%2Fjpegs%2FThi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn.jpg?alt=media&token=669d9482-5855-4f76-8496-992950f3bf68" alt="image" />
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" color="success" startIcon={<CheckIcon/>}>Accept</Button>
            <Button variant="contained" color="error" startIcon={<CloseIcon/>}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}