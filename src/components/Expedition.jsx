import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Expedition = () => {
  const handleStartExpedition = () => {
    console.log('Iniciando expedición...');
  };

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
      <Typography variant="h4" gutterBottom>Expedición</Typography>
      <Typography variant="body1" gutterBottom>
        Selecciona una cueva para comenzar la expedición y obtener recompensas.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStartExpedition}>
        Iniciar Expedición
      </Button>
    </Box>
  );
};

export default Expedition;
