import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import img from '../image/image3.png';

const categories = [
  "Restaurant", "Textiles", "Salon & Spa", "Health Clinic", "Pharmacy", "Automobiles",
  "Service center", "Café", "Electronics", "Farm Dairy", "Supermarket", "Stationery"
];

const Category = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  

  // Set card size based on screen
  let cardSize = 120;
  let imageSize = 50;
  let fontSize = 12;

  if (isXs) {
    cardSize = 80;
    imageSize = 30;
    fontSize = 10;
  } else if (isSm) {
    cardSize = 100;
    imageSize = 40;
    fontSize = 11;
  } else if (isMd) {
    cardSize = 120;
    imageSize = 50;
    fontSize = 12;
  } else if (isLg) {
    cardSize = 140;
    imageSize = 60;
    fontSize = 14;
  }

  return (
    <Box sx={{ padding: 2, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 10 }}>
        Select your business category for registration
      </Typography>

      <Grid container spacing={isXs? 3  : isLg ? 5 : isMd ? 4 : isSm ? 3 : 2} justifyContent="center">
        {categories.map((label, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: cardSize,
                height: cardSize,
                border: 1,
                borderColor: '#BDBDBD',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={label}
                sx={{
                  width: imageSize,
                  height: imageSize,
                  mb: 1,
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  fontSize={fontSize}
                  align="center"
                >
                  {label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
