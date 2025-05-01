import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Tooltip,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { FaKey } from "react-icons/fa";

const LoginForm = () => {
  // State to hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle login button click
  const handleSubmit = () => {
    if (username && password) {
      // Log credentials
      console.log(`username: ${username}, password: ${password}`);
      
      // Clear error
      setErrorMessage('');

      // Clear input fields after successful login
      setUsername('');
      setPassword('');
    } else {
      // Show error if fields are empty
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f0f0"
      px={2}
    >
      {/* Login Form Container */}
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          maxWidth: 480,
          borderRadius: 0,
          overflow: 'hidden',
          '@media (min-width: 600px)': {
            maxWidth: 600,
          },
          '@media (min-width: 1024px)': {
            maxWidth: 700,
          },
        }}
      >
        {/* Form Header */}
        <Box bgcolor="#F4F4F4" px={3} py={2} borderBottom="1px solid #ccc">
          <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center" gap={1}>
            <LockIcon /> Please enter your login details.
          </Typography>
        </Box>

        <Box p={3} bgcolor="#fff">
          <Box mb={2}>
            <Typography variant="body2" fontWeight="500" gutterBottom>
              Username
            </Typography>
            <Box
              display="flex"
              alignItems="stretch"
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                height: 40,
                overflow: 'hidden',
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'black',
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 40,
                  bgcolor: '#f5f5f5',
                  borderRight: '1px solid #ccc',
                }}
              >
                <PersonIcon color="action" />
              </Box>
              
              <Tooltip title="Enter username" arrow>
                <TextField
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                  fullWidth
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '100%',
                      padding: 0,
                    },
                    '& .MuiInputBase-input': {
                      padding: '10px 12px',
                    },
                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                      borderBottom: 'none !important',
                    },
                    '& .MuiInputBase-root.Mui-focused': {
                      backgroundColor: 'inherit',
                    },
                  }}
                />
              </Tooltip>
            </Box>
          </Box>

          <Box mb={2}>
            <Typography variant="body2" fontWeight="500" gutterBottom>
              Password
            </Typography>
            <Box
              display="flex"
              alignItems="stretch"
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                height: 40,
                overflow: 'hidden',
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'black',
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 40,
                  bgcolor: '#f5f5f5',
                  borderRight: '1px solid #ccc',
                }}
              >
                <LockIcon color="action" />
              </Box>

              <Tooltip title="Enter password (only numbers, max 8 digits)" arrow>
                <TextField
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) && value.length <= 8) {
                      setPassword(value);
                    }
                  }}
                  
                  slotProp={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                    maxLength: 8,
                  }}
                  variant="standard"
                  fullWidth
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '100%',
                      padding: 0,
                    },
                    '& .MuiInputBase-input': {
                      padding: '10px 12px',
                    },
                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                      borderBottom: 'none !important',
                    },
                    '& .MuiInputBase-root.Mui-focused': {
                      backgroundColor: 'inherit',
                    },
                  }}
                />
              </Tooltip>
            </Box>
          </Box>

          {/* Error message */}
          {errorMessage && (
            <Typography color="error" variant="body2" mb={2}>
              {errorMessage}
            </Typography>
          )}

          {/* Login Button */}
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaKey size={16} />}
              sx={{ textTransform: 'none' }}
              onClick={handleSubmit}
            >
              <Typography fontSize='20px'>Login</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Footer Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        width="100%"
        sx={{
          maxWidth: 480,
          '@media (min-width: 600px)': {
            maxWidth: 600,
          },
          '@media (min-width: 1024px)': {
            maxWidth: 700,
          },
        }}
      >
        {/* Copyright */}
        <Typography variant="body2" color="textSecondary" mb={2} sx={{ paddingBottom: 5 }}>
          <a style={{ color: '#1DB2ED', textDecoration: 'none' }}>OpenCart</a> © 2009-2025 All Rights Reserved.
        </Typography>

        {/* New Registration Button */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: '#ccc',
            bgcolor: '#FFFFFF',
            borderRadius: '8px',
            textTransform: 'none',
          }}
        >
          <Typography variant="body2" sx={{ color: 'black', fontWeight: 'bold', padding: 1 }}>
            New Registration
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
