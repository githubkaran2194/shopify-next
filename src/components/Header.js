'use client'

import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Drawer, Box } from '@mui/material';
import Hamburger from 'hamburger-react';

import Link from 'next/link';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" variant="elevation" color="default" className="bg-gradient-to-tr to-gray-800 from-gray-900">
        <Toolbar>
          <Typography variant="h6" component="div" className="text-white font-bold cursor-pointer">
            Shopify-store
          </Typography>
          <div className="flex-grow"></div>
          <div className="hidden md:flex gap-7 items-center">
            <Link href="/" passHref>
              <Button className="text-white font-bold hover:text-green-500">Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button className="text-white font-bold hover:text-green-500">About</Button>
            </Link>
            <Link href="/products" passHref>
              <Button className="text-white font-bold hover:text-green-500">Products</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="text-white font-bold hover:text-green-500">Contact</Button>
            </Link>
            <Link href='/cart'>
              <Button variant="outlined" className="text-white font-bold">Cart</Button>
            </Link>
            <Button
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuClick}
              variant="contained"
              className="text-white font-bold"
            >
              Account
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleDrawerToggle} className='text-white'>
            <Hamburger />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        sx={{ '& .MuiDrawer-paper': { width: '300px' } }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box className='flex flex-col gap-3 p-3 bg-gradient-to-tr to-gray-800 from-gray-900'>
          <Typography variant="h6" component="div" className="text-blue-400 font-bold cursor-pointer">
            Shopify-store
          </Typography>
          <hr />
          <Link href="/" passHref>
            <Button className="text-white font-bold hover:text-green-500">Home</Button>
          </Link>
          <Link href="/about" passHref>
            <Button className="text-white font-bold hover:text-green-500">About</Button>
          </Link>
          <Link href="/products" passHref>
            <Button className="text-white font-bold hover:text-green-500">Products</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="text-white font-bold hover:text-green-500">Contact</Button>
          </Link>
          <Link href='/cart'>
            <Button variant="outlined" className="text-white font-bold">Cart</Button>
          </Link>
          <Button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuClick}
            variant="contained"
            className="text-white font-bold"
          >
            Account
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href='/account/profile'>
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
