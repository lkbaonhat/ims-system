import React from 'react'
//mui library
import {
    Box,
    InputBase,
    Typography,
    IconButton,
    Autocomplete,
    Stack,
    TextField,
  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
//components
import Table from "../../components/Table";
//call api


export default function InternList() {
    const [internList, setInternList] = React.useState([]);
    //form filter
    const options = ["Option 1", "Option 2"];
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState("");

    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "fullName",
          headerName: "Full name",
          flex: 0.2,
          cellClassName: "name-column--cell",
        },
        { field: "email", headerName: "Email", flex: 0.2 },
        { field: "phone", headerName: "Phone number", flex: 0.2 },
        { field: "gender", headerName: "Gender", flex: 0.2 },
        {
          field: "button",
          headerName: "",
          flex: 0.1,
          renderCell: (params) => {
            return (
              <>
                <Box
                  m="5px"
                  display="flex"
                  borderRadius="5px"
                  border="1px solid #2D77FF"
                >
                  <IconButton
                    color="primary"
                    sx={{ fontSize: 15, p: "5px" }}
                    onClick={() => handleRowButtonClick(params.row.id)}
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
            List intern
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
          <Table columns={columns} rows={internList} pageSize={10} />
        </Box>
      </Box>
  )
}
