import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2ca58f' }} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Bookworm
          </Typography>
          <Avatar sx={{display: 'flex',}}>H</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}