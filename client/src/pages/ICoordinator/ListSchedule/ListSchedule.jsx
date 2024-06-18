import React from "react";
import {
  Box,
  InputBase,
  Typography,
  IconButton,
  Autocomplete,
  Stack,
  TextField,
  Button, Avatar
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Table from "../../../components/Table";
import { fetchSchedule } from "../../../services/apiServices";
import { useNavigate, useParams } from "react-router-dom";
import FormModal from "../../../components/Modal/FormModal";
import { useModalContext } from "../../../context/ModalContext";

const ScheduleButton = () => {
  const { handleOpen } = useModalContext();

  const scheduleFields = [
    {name: 'date', label: 'Date', type: 'date'},
    {name: 'time', label: 'Time', type: 'time'},
    {name: 'location', label: 'Location', type: 'text'},
    {name: 'interviewer', label: 'Interviewer', type: 'text'},
  ]

  return (
    <Button variant="contained" color="primary" onClick={() => handleOpen(scheduleFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {}))}>
      Create schedule
    </Button>
  );
};  

export default function ListSchedule() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [schedule, setSchedule] = React.useState([]);
  const [error, setError] = React.useState("");
  //form filter
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const getSchedule = async () => {
    try {
      const res = await fetchSchedule(id);
      setSchedule(res);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  React.useEffect(() => {
    getSchedule();
  }, []);

  const scheduleFields = [
    {name: 'date', type: 'date'},
    {name: 'time', type: 'time'},
    {name: 'location', label: 'Location', type: 'text'},
    {name: 'interviewer', label: 'Interviewer', type: 'text'},
  ]

  const handleFormSubmit = async ( formData) => {
    console.log('Form Data:', formData);

    // try {
    //   const response = await createPostAPI(formData);
    //   console.log('Create successfully', response);
    //   await getListUser();
    // } catch(error) {
    //   console.log('Create fail');
    // }
  };

  const viewIntervieweesList = () => {
     navigate(`/icoordinator/schedule/${id}/list-interviewees`);
  }

  const handleRowButtonClick = (id) => {
    console.log(id);
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1},
    { field: "date", headerName: "Date", flex: 0.2 },
    { field: "time", headerName: "Time", flex: 0.2 },
    { field: "location", headerName: "Location", flex: 0.2 },
    { field: "interviewer", headerName: "Interviewer", flex: 0.2,
        renderCell: (params) => {
            return (
              <>
                <Box m="5px" display="flex">
                  <IconButton sx={{".button:focus": {outline: "none"}}} onClick={() => handleRowButtonClick(params.row.id)}>
                    <Avatar>
                      <PersonAddIcon />
                    </Avatar>
                  </IconButton>
                </Box>
              </>
            );
        }
    },
    { field: "button", headerName: "", flex: 0.1,
      renderCell: (params) => {
        return (
          <>
            <Box
              m="5px"
              display="flex"
              borderRadius="5px"
              border="1px solid red"
            >
              <IconButton
                color="error"
                sx={{ fontSize: 15, p: "5px" }}
                onClick={() => handleRowButtonClick(params.row.id)}
              >
                <DeleteOutlineIcon fontSize="8px" />
              </IconButton>
            </Box>
            <Box
              m="5px"
              display="flex"
              borderRadius="5px"
              border="1px solid #1976D2"
            >
              <IconButton
                color="primary"
                sx={{ fontSize: 15, p: "5px" }}
                onClick={() => handleRowButtonClick(params.row.id)}
              >
                <BorderColorIcon fontSize="8px" />
              </IconButton>
            </Box>
            <Box
              m="5px"
              display="flex"
              borderRadius="5px"
              border="1px solid #2D77FF"
            >
              <IconButton
                color="primary"
                sx={{ fontSize: 15, p: "5px" }}
                onClick={viewIntervieweesList}
              >
                <VisibilityIcon fontSize="8px" />
              </IconButton>
            </Box>
          </>
        );
      },
    },
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
          List schedule
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
        <Box sx={{ m: "20px 0" }}>
            <ScheduleButton />
            <FormModal
              formFields={scheduleFields}
              nameForm="Create new schedule"
              onFormSubmit={handleFormSubmit}
            />
        </Box>
        <Table columns={columns} rows={schedule} pageSize={10} />
      </Box>
    </Box>
  );
}
