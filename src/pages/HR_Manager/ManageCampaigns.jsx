import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  Typography,
  IconButton,
  Autocomplete,
  Stack,
  TextField,
  Button,  
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Table from "../../components/Table";
import { fetchPosts as fetchPostsApi } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const getPost = async () => {
    try {
      const res = await fetchPostsApi();
      setPosts(res);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title',headerName: 'Title',flex: 0.5,cellClassName: 'name-column--cell',},
    { field: 'position', headerName: 'Position', flex: 0.2 },
    { field: 'createdDate', headerName: 'Date create', flex: 0.2 },
    {
      field: 'button',
      headerName: '',
      flex: 0.1,
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
          </>
        );
      },
    },
  ];;

  //Form filter
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const handleCreatePost = () => {
    navigate('/hrmanager/create_post')
  }

  const handleRowButtonClick = (id) => {
    console.log('Button clicked for row with id:', id);
  };

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
          List internship campaigns
        </Typography>
        <Box
          display="flex"
          borderRadius={2}
          backgroundColor="white"
        >
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
                    p: 0
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                      border: "2px solid #E0E0E0"
                  }
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
                  <TextField {...params}  />
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
            fontWeight: 700
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeader": {
            textAlign: "center",
            fontWeight: 700
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
        }}
      >
        <Box sx={{m: "20px 0"}}>
          <Button variant="contained" onClick={handleCreatePost}>Create post</Button>
        </Box>
        <Table columns={columns} rows={posts} pageSize={10}/>
      </Box>
    </Box>
  );
};

export default Team;
