import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Missions = () => {
  const missions = [
    { name: 'Minería Básica', reward: '10 $mine' },
    { name: 'Explorador Experto', reward: '20 $mine' },
    { name: 'Caza de Tesoros', reward: '50 $mine' },
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
      <Typography variant="h4" gutterBottom>Misiones</Typography>
      <List>
        {missions.map((mission, index) => (
          <ListItem key={index}>
            <ListItemText primary={mission.name} secondary={`Recompensa: ${mission.reward}`} />
            <Button variant="contained" color="secondary">Completar</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Missions;
