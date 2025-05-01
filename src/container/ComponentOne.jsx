  import React from 'react';
  import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
  import img1 from '../image/image 1.jpg';
  import img2 from '../image/image 2.jpg';

  const ComponentOne = () => {
    return (
      <Box sx={{ backgroundColor: '#F5F5F5',padding:'12%'  }}>
        <Grid container spacing={10} justifyContent="center" paddingX={4}>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 9, border:1, borderColor:'#DBDBDC' , textAlign: 'center', padding: 3 }}>
              <CardMedia
                component="img"
                image={img1}
                alt="Service-based"
                sx={{ width: 200, height: 200, margin: '0 auto', mb: 7, paddingTop:10}}
              />
              <CardContent>
                <Typography variant="h4" sx={{
                  fontSize:36,
                  fontWeight:'bold',
                }}>Service-based business
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3,border:1, borderColor:'#DBDBDC' , boxShadow: 9, textAlign: 'center', padding: 3 }}>
              <CardMedia
                component="img"
                image={img2}
                alt="Product-based"
                sx={{ width: 200, height: 200, margin: '0 auto', mb: 7, paddingTop:10}}
              />
              <CardContent>
                <Typography variant="h4" sx={{
                  fontSize:36,
                  fontWeight:'bold',
                }}>Product-based business
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

  export default ComponentOne;
