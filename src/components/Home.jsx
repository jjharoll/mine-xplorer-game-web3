import React from 'react';
import { Box, Typography, Button, Grid, LinearProgress, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { BatteryChargingFull, Fastfood, Mood } from '@mui/icons-material'; // Iconos de MUI
import minerGif from '../assets/miner.gif';

const Home = () => {
  // Dummy data para las barras de estado
  const energy = 80; // Representa 80%
  const hunger = 30; // Representa 30%
  const mood = 90; // Representa 90%

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="background.default"
      color="text.primary"
      padding={2}
    >
      <Typography variant="h4" gutterBottom>Estado del Minero</Typography>

      <Box
        component="img"
        src={minerGif}
        alt="Miner Animation"
        sx={{ width: 150, height: 150, marginY: 4 }}
      />

      {/* Barras de Estado */}
      <Stack direction="column" spacing={2} width="100%" maxWidth="300px" mb={4}>
        <Box display="flex" alignItems="center">
          <Mood sx={{ mr: 1 }} color="primary" />
          <Typography variant="body1" sx={{ flexGrow: 1 }}>Estado de ánimo</Typography>
          <Typography variant="body1">{mood}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={mood} sx={{ mb: 2 }} />

        <Box display="flex" alignItems="center">
          <Fastfood sx={{ mr: 1 }} color="secondary" />
          <Typography variant="body1" sx={{ flexGrow: 1 }}>Hambre</Typography>
          <Typography variant="body1">{hunger}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={hunger} color="secondary" sx={{ mb: 2 }} />

        <Box display="flex" alignItems="center">
          <BatteryChargingFull sx={{ mr: 1 }} color="success" />
          <Typography variant="body1" sx={{ flexGrow: 1 }}>Energía</Typography>
          <Typography variant="body1">{energy}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={energy} color="success" />
      </Stack>

      <Typography variant="h5" gutterBottom>$mine: 1000 | $top: 500</Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/expedition">
            1. Expedición
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/swap">
            2. Swap
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/marketplace">
            3. Marketplace
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/shop">
            4. Tienda
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/missions">
            5. Misiones
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/airdrop">
            6. Airdrop
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
