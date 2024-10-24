import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Swap = () => {
  const [amount, setAmount] = useState('');

  const handleSwap = () => {
    console.log(`Swapping ${amount} $mine to $top`);
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
      <Typography variant="h4" gutterBottom>Intercambio de Tokens</Typography>
      <TextField
        label="Cantidad"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSwap}>
        Intercambiar
      </Button>
    </Box>
  );
};

export default Swap;
