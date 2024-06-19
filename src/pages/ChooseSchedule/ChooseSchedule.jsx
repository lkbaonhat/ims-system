import React from 'react'
import { Box,Button,Avatar,ThemeProvider,Container,CssBaseline,Typography,Autocomplete,TextField } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { createTheme } from '@mui/material/styles';
import { date,time } from './Field';

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 700, // Set the font-weight you want
    },
  },
});

export default function ChooseSchedule() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <CalendarMonthIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Schedule interview
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2, width: "100%", textAlign: "center"}}
          >
            <Autocomplete
              disablePortal
              fullWidth
              id="combo-box-demo"
              options={date}
              sx={{ mb: 2}}
              renderInput={(params) => <TextField {...params} label="Date" />}
            />
            <Autocomplete
              disablePortal
              fullWidth 
              id="combo-box-demo"
              options={time}
              renderInput={(params) => <TextField {...params} label="Time" />}
            />
            <TextField fullWidth margin="normal" name="email" label="Email" variant="outlined"/>
            <Typography variant="body2" color="error" textAlign="start" mt={1}>*Note: Chọn thời gian bạn có thể tham gia phỏng vấn</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
