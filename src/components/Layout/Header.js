import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'#0aa5a7'} variant='h5' component='div' sx={{ flexGrow: 1, my: 2 }} fontSize='20' >
        Sunrise
      </Typography>
      <Divider/>
      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'}>Домашняя страница</Link>
        </li>
        <li>
          <Link to={'/offers'}>Предложения</Link>
        </li>
        <li>
          <Link to={'/about'}>О нас</Link>
        </li>
        <li>
          <Link to={'/contact'}>Связаться</Link>
        </li>
      </ul>

    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton color='inherit' 
            aria-label='open drawer' 
            edge='start' 
            sx={{
              mr: 2,
              display: { sm: 'none' }
            }}
            onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={'#0aa5a7'} variant='h5' component='div' sx={{ flexGrow: 1 }} >
              Sunrise
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/offers'}>Offers</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer variant='temporary' open={mobileOpen} 
            onClose={handleDrawerToggle}
            sx={{ display:{xs: 'block', sm: 'none'}, 
            '& .MuiDrawer-paper':{
              boxSizing:'border-box',
              width: '240px'
            }}}>
              {drawer}
            </Drawer>
        </Box>
        <Box >
          <Toolbar/>
        </Box>
        
      </Box>
    </>
  )
}

export default Header