import React from 'react';
import { AppBar,Toolbar, Typography, Box } from '@mui/material';
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#FFFFFE', 
        boxShadow:6,  
      }}
    >
      <Toolbar>
        <Box
          display="flex"
        >
          <Typography
            variant="h3"
            sx={{
              color: '#1DB2ED',
              fontWeight: '700',
              marginRight: '10px', 
            }}
          >
            opencart
          </Typography>
            <FaOpencart style={{ color: '#1DB2ED', fontSize: '55px',  }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
