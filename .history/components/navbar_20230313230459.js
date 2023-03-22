import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MenuAppBar(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#42ae9a' }} position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Bookworm
          </Typography>
          <Avatar src={props.src}>
            
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}