import React from 'react';
import { Box, Typography } from '@mui/material';

const MinerStatus = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={2}
      mb={4}
    >
      <Typography variant="h6">Energía: 80%</Typography>
      <Typography variant="h6">Hambre: 30%</Typography>
      <Typography variant="h6">Estado de ánimo: Feliz</Typography>
    </Box>
  );
};

export default MinerStatus;
