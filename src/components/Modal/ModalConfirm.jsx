import React from 'react'
import { Avatar, Box, Modal, Stack, Typography, Button } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useModalContext } from '../../context/ModalContext';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-20%, -50%)',
    width: "25%",
    height: "25%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: "2%",
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 2
};

export default function ModalConfirm({ accept, cancel }) {
    const { modalOpen, handleClose } = useModalContext();
  return (
    <Modal
        open={modalOpen}
        onClose={handleClose}
    >
        <Box sx={style}>
            <Avatar sx={{mt: "2%", bgcolor: "primary.main"}}>
                <HelpOutlineIcon/>
            </Avatar>
            <Typography variant="h4" color="initial" m="3% 0">Are you sure to join?</Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="contained" color="success" startIcon={<CheckIcon/>} onClick={accept}>Yes</Button>
                <Button variant="contained" color="error" startIcon={<CloseIcon/>} onClick={cancel}>No</Button>
            </Stack>
        </Box>
    </Modal>
  )
}
