import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Plan', path: 'plan' },
  { name: 'Record', path: 'record' },
  { name: 'Album', path: 'album' },
];

export default function HeadBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function toggleDrawer(event, open) {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  }

  return (
    <AppBar color="inherit" position="sticky" style={{ backgroundColor: 'rgba(0, 55, 86, 1)', boxShadow: '0 0' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          // sx={{ mr: 1 }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
            <img src="/assets/logo.png" style={{ height: '30px', width: '30px', marginRight: '10px' }}></img>
            DearMyBaby
          </Link>
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          // sx={{ mr: 1 }}
          onClick={(event) => toggleDrawer(event, true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={(event) => toggleDrawer(event, false)}>
          <Box
            sx={{ width: '50vw' }}
            role="presentation"
            onClick={(event) => toggleDrawer(event, false)}
            onKeyDown={(event) => toggleDrawer(event, false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="user">
                  <Avatar sx={{ width: 32, height: 32, mr: 2 }}>M</Avatar>
                  <ListItemText primary="MyAccount"></ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider></Divider>
              {links.map((link) => (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton component={Link} to={link.path}>
                    <ListItemText primary={link.name}></ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
