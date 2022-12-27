import { useState, useEffect } from 'react';
import {logout} from './api/authApi';
import { AppShell,
  IconButton, Avatar, Menu, MenuItem,
  AppBar, SvgIcon, Box, Typography, SideNavMenu, SideNavMenuItem, NAV_ITEM_ACTIVE_CLASSNAME } from '@mineral/core';
import {Group as PeopleIcon} from '@mineral/icons';
import HugsLogo from './assets/rally_hug_onion.svg';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import { ROW_STYLE } from './constant_styles';
import {CUSTOMERS} from './constant_strings';
import { SelectionContextProvider } from './contexts/SelectionContext';

const USER_MENU_ID = 'user menu';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const doLogout = async () => {
    await logout();
    sessionStorage.clear();
    handleClose();
    navigate('/login');
  }

  console.log(JSON.parse(sessionStorage.getItem('user'))?.id);

  return (
    <>
      <IconButton
        aria-controls={open ? USER_MENU_ID : undefined}
        aria-haspopup
        aria-expanded={open ? 'true' : undefined}
        aria-label="User menu"
        onClick={handleClick}
        size="large"
        color="inherit"
        variant="text">
        <Avatar
          size="medium"
          src={`data:image/jpeg;base64,${JSON.parse(sessionStorage.getItem('user'))?.profile_image}`}
          sx={{
            color: 'currentColor',
            bgcolor: 'transparent',
            border: '2px solid',
          }}
        />
      </IconButton>
      <Menu
        id={USER_MENU_ID}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem onClick={doLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

const BasicLink = ({className, ...restProps}, ref) => {
  return (
    <NavLink 
      {...restProps}
      end
      className={({ isActive }) =>
        [className, isActive ? NAV_ITEM_ACTIVE_CLASSNAME : null]
          .filter(Boolean)
          .join(' ')
      }
      ref={ref}
    />
  );
};

const MainNav = () => {
  const navigate = useNavigate();
  
  return (
    <SideNavMenu>
      <SideNavMenuItem 
        label="Customers"
        id="l_customers"
        icon={<PeopleIcon />}
        onClick={() => {navigate(CUSTOMERS)}}
      />
    </SideNavMenu>
  );
}

const HugsImage = () => {
  return (
    <Box sx={{...ROW_STYLE}}>
      <SvgIcon component={HugsLogo} sx={{width: '48px', height: '48px'}} />
      <Typography variant="h2">Know Your Customer</Typography>
    </Box>
  );
};

const MyAppBar = () => {
  return (
    <AppBar actions={<UserMenu/>} logo={<HugsImage/>} color="primary">
    </AppBar>
  );
}

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
      navigate('/login');
    }
  }, []);

  return (
    <AppShell appBar={<MyAppBar/>} leftDrawer={<MainNav />}>
      <SelectionContextProvider>
        <Outlet />
      </SelectionContextProvider>
    </AppShell>
  );
}

export default App;
