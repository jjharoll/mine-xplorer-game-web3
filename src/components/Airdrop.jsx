import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Airdrop = () => {
  const handleClaimAirdrop = () => {
    console.log('Airdrop reclamado');
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
      <Typography variant="h4" gutterBottom>Airdrop</Typography>
      <Typography variant="body1" gutterBottom>
        Reclama tu airdrop diario para obtener más tokens.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClaimAirdrop}>
        Reclamar Airdrop
      </Button>
    </Box>
  );
};

export default Airdrop;
