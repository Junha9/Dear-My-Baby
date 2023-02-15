import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useMember, useMemberMethod } from '@/commons/MemberContext';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Plan', path: 'plan' },
  { name: 'Record', path: 'record' },
  { name: 'Album', path: 'album' },
];

export default function HeadBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const navigate = useNavigate();
  const member = useMember();
  const { logout } = useMemberMethod();

  const toggleDrawer = (event, open) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleList = (event) => {
    event.stopPropagation();
    setListOpen(!listOpen);
  };

  const handleLogout = () => {
    logout();
    window.localStorage.clear();
    // navigate('/'); // 로그아웃이 마무리되기 전에 navigate 하여 home의 memberReload가 먼저 호출되는 오류가 존재
  };

  return (
    <div>
      <AppBar
        color="inherit"
        position="sticky"
        style={{ width: '100vw', backgroundColor: 'rgb(59, 45, 142)', boxShadow: '0 0' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 1 }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex' }}>
              {/* <img
                src="/assets/logo.png"
                style={{ height: '30px', width: '30px', marginRight: '10px' }}
                alt="logo"
              ></img> */}
              Dear my baby
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
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={(event) => toggleDrawer(event, false)}>
            <Box
              sx={{ width: '50vw' }}
              role="presentation"
              onClick={(event) => toggleDrawer(event, false)}
              onKeyDown={(event) => toggleDrawer(event, false)}
            >
              <List>
                {member != null ? (
                  <>
                    <ListItemButton onClick={toggleList}>
                      <Avatar src={member.memberImg} sx={{ width: 32, height: 32, mr: 2 }}></Avatar>
                      <ListItemText primary={member.memberName}></ListItemText>
                      {listOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={listOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton component={Link} to="user" sx={{ pl: 4 }}>
                          <ListItemText primary="MyPage" />
                        </ListItemButton>
                        <ListItemButton onClick={handleLogout} sx={{ pl: 4 }}>
                          <ListItemText primary="Logout" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <>
                    <ListItemButton component={Link} to="user/login">
                      <Avatar sx={{ width: 32, height: 32, mr: 2 }}>M</Avatar>
                      <ListItemText primary="로그인 하기"></ListItemText>
                    </ListItemButton>
                  </>
                )}
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
    </div>
  );
}
