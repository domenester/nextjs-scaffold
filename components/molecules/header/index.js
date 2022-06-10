import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import makeStyles from '@mui/styles/makeStyles';

const useStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main
  }
}))

export default function Header() {
  const classes = useStyle()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <div>
            <img src="/images/logo-header.png" alt="" />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}