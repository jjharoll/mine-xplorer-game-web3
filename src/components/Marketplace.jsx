import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Marketplace = () => {
  const items = [
    { name: 'Casco Dorado', price: 150 },
    { name: 'Linterna Avanzada', price: 100 },
    { name: 'Pico de Platino', price: 200 },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={2}
      bgcolor="background.default"
      color="text.primary"
    >
      <Typography variant="h4" gutterBottom>Marketplace</Typography>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2">Precio: {item.price} $mine</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Comprar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Marketplace;
