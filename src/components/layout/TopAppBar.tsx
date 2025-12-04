import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Code as CodeIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { logout } from '@/redux/slices/authSlice';
import { RootState } from '@/types';
import { useThemeMode } from '@/context/ThemeContext';
import NavigationDrawer from './NavigationDrawer';
import NotificationMenu from './NotificationMenu';

const TopAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const { unreadCount } = useSelector((state: RootState) => state.user);
  const { mode, toggleTheme } = useThemeMode();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.info('You have been logged out successfully.');
    navigate('/login');
    handleMenuClose();
  };

  const handleSourceCodeClick = () => {
    window.open('https://github.com/Mewoabi-Joe/react-dashboard', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { xs: 'flex', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1,
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', fontSize: '1.2rem' }}>
                T
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
              tabler
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            variant="outlined"
            size="small"
            startIcon={<CodeIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />}
            onClick={handleSourceCodeClick}
            sx={{
              mr: { xs: 0.5, sm: 2 },
              textTransform: 'none',
              minHeight: { xs: 32, sm: 36 },
              px: { xs: 0.75, sm: 2 },
              py: { xs: 0.5, sm: 0.75 },
              '& .MuiButton-startIcon': {
                marginRight: { xs: 0, sm: 1 },
                marginLeft: 0,
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline' },
                lineHeight: 1.5,
              }}
            >
              Source code
            </Box>
          </Button>

          <IconButton
            onClick={toggleTheme}
            color="default"
            sx={{ mr: { xs: 0.5, sm: 1 }, p: { xs: 0.75, sm: 1 } }}
            title="Toggle theme"
          >
            {mode === 'dark' ? (
              <LightModeIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
            )}
          </IconButton>

          <IconButton
            color="default"
            sx={{ mr: { xs: 0.5, sm: 1 }, p: { xs: 0.75, sm: 1 } }}
            onClick={handleNotificationMenuOpen}
            aria-label="show notifications"
          >
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
            </Badge>
          </IconButton>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="default"
            sx={{ p: { xs: 0.5, sm: 1 }, ml: { xs: 0, sm: 0 } }}
          >
            <Avatar
              src={user?.avatarUrl}
              sx={{
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                bgcolor: 'primary.main',
              }}
            >
              {user?.avatar || 'U'}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="subtitle2">{user?.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {user?.role}
              </Typography>
            </Box>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <NotificationMenu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={handleNotificationMenuClose}
      />
    </>
  );
};

export default TopAppBar;
