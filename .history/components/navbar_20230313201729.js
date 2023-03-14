import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2ca58f' }} position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Bookworm
          </Typography>
          <Avatar><AccountCircleIcon></AccountCircleIcon></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}