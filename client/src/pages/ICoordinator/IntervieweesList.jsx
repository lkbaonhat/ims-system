import React from 'react'
//mui
import {Box,InputBase,Typography,IconButton,Autocomplete,Stack,TextField,Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//component
import Table from "../../components/Table";
//context file
import { useModalContext } from "../../context/ModalContext";
//api
import { fetchInterviewees } from '../../services/apiServices';
import ModalAdd from '../../components/Modal/AddModal';

export default function IntervieweesList() {
  const [interviewees, setInterviewees] = React.useState([]);
  
  //Form add people
  const { handleOpen } = useModalContext();

  const handleOpenModal = () => {
    handleOpen({
      title: "Add people to interview",
      peopleOptions: [],
      onSubmit: (formData) => {
        console.log(formData);
      }, 
    });
  }

  //form filter
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const getApplication = async () => {
    try {
      const res = await fetchInterviewees();
      setInterviewees(res);
    } catch (err) {
        console.log(err);
    }
  };

  React.useEffect(() => {
    getApplication();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "fullname",
      headerName: "Full Name",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    { field: "position", headerName: "Position", flex: 0.2 },
    { field: "email", headerName: "Email", flex: 0.2 },
  ];

  return (
    <Box m="20px">
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
            List interviewees
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
        <Box
          height="80vh"
          bgcolor="white"
          p="5px 30px"
          m="10px 20px"
          borderRadius="30px"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "10px",
              marginTop: "30px",
            },
            ".MuiDataGrid-root .MuiDataGrid-container--top [role=row]": {
              textAlign: "center",
              fontWeight: 700,
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              display: "flex",
              alignItems: "center",
            },
            "& .MuiDataGrid-columnHeader": {
              textAlign: "center",
              fontWeight: 700,
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
            },
          }}
        >
          <Box sx={{ mt: "20px" }}>
              <Button variant="contained" color="primary" onClick={handleOpenModal}>Add people</Button>
              <ModalAdd />
          </Box>
          <Table columns={columns} rows={interviewees} pageSize={10} />
        </Box>
      </Box>
  )
}
