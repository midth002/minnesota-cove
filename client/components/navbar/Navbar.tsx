import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Link from 'next/link';

type NavbarProps = {
    page: string
}

const Navbar = ({page}: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Link href="/about">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {page}
            </Typography>
        </Link>
       
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}


export default Navbar;