import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Expedition', path: '/expedition' },
    { text: 'Swap', path: '/swap' },
    { text: 'Marketplace', path: '/marketplace' },
    { text: 'Missions', path: '/missions' },
    { text: 'Airdrop', path: '/airdrop' },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mine Xplorer
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose} component={Link} to={item.path}>
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          menuItems.map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.path}>
              {item.text.toUpperCase()}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
