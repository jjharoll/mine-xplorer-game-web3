import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Home from './components/Home';
import Swap from './components/Swap';
import Marketplace from './components/Marketplace';
import Shop from './components/Shop';
import Expedition from './components/Expedition';
import Missions from './components/Missions';
import Airdrop from './components/Airdrop';
import Navbar from './components/Navbar';

// Crear un tema personalizado
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <div style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/expedition" element={<Expedition />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/airdrop" element={<Airdrop />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
