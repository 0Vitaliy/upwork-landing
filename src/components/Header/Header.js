import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Navbar } from '../Navbar';
import { Drawer } from '../Drawer';
import logo_desk from '../../img/logo_desc.svg'
import logo_mob from '../../img/logo_mob.svg'
import burger_menu from '../../img/burger_menu.svg'
import { styles } from './style'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBar sx={styles.appBar} position="static">
      <Container sx={styles.container} maxWidth="xl">
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logoDesk}
          >
            <img src={logo_desk} />
          </Typography>
          <Box sx={styles.burgerMenu}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={styles.logoMob}
          >
            <img src={logo_mob} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default Header;