import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Shop = () => {
  const shopItems = [
    { name: 'Mochila', price: 70 },
    { name: 'Botas Especiales', price: 120 },
    { name: 'Mapa de la Cueva', price: 50 },
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
      <Typography variant="h4" gutterBottom>Tienda</Typography>
      <Grid container spacing={4} justifyContent="center">
        {shopItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2">Precio: {item.price} $mine</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="secondary">Comprar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
