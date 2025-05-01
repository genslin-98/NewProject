import React from 'react';
import { TextField, TextareaAutosize, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';

function RegistrationForm() {
  return (
  <Box>  
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 3, position: 'relative', pb: 10 }}>
      <Typography variant="h5" gutterBottom align="center" fontWeight='bold'>
        New Registration
      </Typography>

      <Typography variant="subtitle2" mb={0.5}>Business Name *</Typography>
      <TextField fullWidth required margin="dense" />

      <Typography variant="subtitle2" mb={0.5}>Owner's Name *</Typography>
      <TextField fullWidth required margin="dense" />

      <Typography variant="subtitle2" mb={0.5}>Email Address *</Typography>
      <TextField fullWidth required type="email" margin="dense" />

      <Typography variant="subtitle2" mb={0.5}>Phone Number *</Typography>
      <TextField fullWidth required margin="dense" />

      <Typography variant="subtitle2" mb={0.5}>ID Number *</Typography>
      <TextField fullWidth required margin="dense" />

      <Typography variant="subtitle2" color="textSecondary" mt={3} mb={1}>
        Business Description * (Minimum 100 words)
      </Typography>
      <TextareaAutosize
        minRows={5}
        style={{
          width: '100%',
          padding: 8,
          border: '1px solid #ccc',
          borderRadius: 4,
          marginTop: '8px',
          fontFamily: 'inherit',
          fontSize: '1rem',
        }}
      />

      <Typography variant="subtitle2" mt={3} mb={0.5}>Business Logo</Typography>
      <Box mt={1} display="flex" alignItems="center" gap={2}>
      <TextField
          margin="dense"
          fullWidth
          sx={{ flex: 7, height: 56 }}
          disabled
          placeholder="No file chosen"
        />
        <Button
          variant="outlined"
          component="label"
          disableElevation
          sx={{
            flex: 3,
            height: 53,
            p: 0,
            fontSize: '13px',
            borderColor: '#BDBDBD',
            color: '#757474',
            textTransform: 'none',
            '&:hover': {
              borderColor: 'black',
            },
          }}
        >
          Choose a file
          <input type="file" hidden />
        </Button>

        
      </Box>

      <FormControlLabel
        control={<Checkbox required />}
        label="I agree to provide accurate information and comply with Apister's terms and conditions for listing my business."
        sx={{ mt: 3 }}
      />
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'right', mt: 2,mb:10, paddingRight:20 }}>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            height: 50,
            px: 4,
            fontSize: '15px',
            borderColor: '#BDBDBD',
            color: '#757474',
            textTransform: 'none',
            backgroundColor: 'white',
            '&:hover': {
              borderColor: 'black',
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default RegistrationForm;
