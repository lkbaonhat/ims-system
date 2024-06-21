import React from 'react'
//mui library
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";    
//components
import Tab from "../../components/Tab";

export default function InternProfile() {
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
            Profile
          </Typography>
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
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={3}>
                <Avatar 
                    src="https://firebasestorage.googleapis.com/v0/b/ims-system-e4f27.appspot.com/o/image%2Fjpegs%2Fpngwing.com.png?alt=media&token=8233175a-03ac-4a92-8630-e70579f89b22"
                    alt='profile'
                    sx={{width:300, height:300, 
                        ".MuiAvatar-img": {
                            objectFit: "contain",
                        }
                    }}
                />  
            </Grid>
            <Grid item xs={9}>
                <Typography variant="h4" color="initial">Information:</Typography>
                <Typography variant="h6" color="initial">Name: </Typography>
                <Typography variant="h6" color="initial">Email: </Typography>
                <Typography variant="h6" color="initial">Phone: </Typography>
                <Typography variant="h6" color="initial">Address: </Typography>
                <Typography variant="h6" color="initial">Date of Birth: </Typography>
                <Button variant="outlined" color="primary">
                  View cv
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Tab/>
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}
