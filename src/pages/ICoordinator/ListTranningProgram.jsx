import React from "react";
//mui library
import {
  Accordion,
  AccordionSummary,
  Grid,
  Box,
  Typography,
  Stack,
  Autocomplete,
  InputBase,
  IconButton,
  TextField,
  Paper, 
  Button,
} from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {Gauge} from "@mui/x-charts/Gauge";
//components
//react-router-dom
import { useNavigate, useParams } from "react-router-dom";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function ListTranningProgram() {
  //form filter
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  //react-router-dom
  const { id } = useParams();
  const navigate = useNavigate();
  //Handle view detail event
  const handleViewDetail = () => {
    //navigate to detail page

  };
  //handle create
  const handleCreate = () => {
    //navigate to create page
    navigate(`/icoordinator/tranning_program/${id}/createTP`);
  };

  return (
    <Box sx={{mt: 5}}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="white"
        p="5px 30px"
        m="0 20px"
        borderRadius="30px"
      >
        <Typography sx={{ ml: "5px", fontWeight: 700 }} variant="h5">
          List tranning program
        </Typography>
        <Box display="flex" borderRadius={2} backgroundColor="white">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                p: "0 5px",
                flex: 1,
                border: "2px solid #E0E0E0",
                borderRadius: "30px",
              }}
            >
              <InputBase placeholder="Search" />
              <IconButton type="button">
                <SearchIcon />
              </IconButton>
            </Stack>
            <Stack spacing={5} sx={{ width: 200 }}>
              <Autocomplete
                sx={{
                  ".MuiOutlinedInput-root .MuiAutocomplete-input": {
                    p: 0,
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #E0E0E0",
                  },
                }}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => (
                  <TextField {...params} />
                  // label="Role"
                )}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack direction="row" justifyContent="start" pt="20px" px="35px">
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>          
      </Stack>
      <Grid container columnSpacing={2} p="10px 35px">
        <Grid item xs={3} p="10px">
            <Paper sx={{bgcolor: 'white', p: "28px"}}>
                <Typography variant="h5" color="initial" textAlign="center" p="20px 0">Tranning program name</Typography>
                <Stack direction="row" justifyContent="center" >
                    <Button variant="contained" onClick={handleViewDetail}>
                        Detail
                    </Button>
                </Stack>
            </Paper>
        </Grid>
        <Grid item xs={9} p="10px 0">
          <Accordion sx={{width: "100%"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ paddingY: "11px"}}
            >
              <Grid container>
                <Grid item xs={3}>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Gauge width={100} height={100} value={60} />
                        <Typography variant="body2" color="initial">Part</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Gauge width={100} height={100} value={60} />
                        <Typography variant="body2" color="initial">Task</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Gauge width={100} height={100} value={60} />
                        <Typography variant="body2" color="initial">Task</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Gauge width={100} height={100} value={60} />
                        <Typography variant="body2" color="initial">End date</Typography>
                    </Stack>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" color="initial">Description:</Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}
