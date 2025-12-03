import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Typography, Box, Divider, IconButton, Button } from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Circle as CircleIcon,
  NotificationsNone as NotificationsNoneIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { RootState } from '@/types';
import { markNotificationAsRead } from '@/redux/slices/userSlice';

interface NotificationMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ anchorEl, open, onClose }) => {
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((state: RootState) => state.user);

  const handleMarkAsRead = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(markNotificationAsRead(id));
  };

  const handleMarkAllAsRead = (event: React.MouseEvent) => {
    event.stopPropagation();
    notifications.forEach((notification) => {
      if (!notification.read) {
        dispatch(markNotificationAsRead(notification.id));
      }
    });
  };

  const handleNotificationClick = (notificationId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    // Don't close menu, just mark as read if unread
    const notification = notifications.find((n) => n.id === notificationId);
    if (notification && !notification.read) {
      dispatch(markNotificationAsRead(notificationId));
    }
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

      if (diffInSeconds < 60) return 'just now';
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
      if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;

      return date.toLocaleDateString();
    } catch {
      return timestamp;
    }
  };

  const handleMenuClose = (event: React.MouseEvent | React.KeyboardEvent, reason?: string) => {
    // Close on backdrop click or escape key
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      onClose();
      return;
    }
    // Close on escape key
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Escape') {
      onClose();
      return;
    }
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      onClick={(e) => e.stopPropagation()}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          width: 380,
          maxHeight: 520,
          mt: 1.5,
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 4px 20px rgba(0,0,0,0.15)'
              : '0 4px 20px rgba(0,0,0,0.4)',
          borderRadius: 2,
          overflow: 'hidden',
        },
      }}
      MenuListProps={{
        sx: { p: 0 },
        onClick: (e: React.MouseEvent) => e.stopPropagation(),
        onMouseDown: (e: React.MouseEvent) => e.stopPropagation(),
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2.5,
          py: 1.75,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary' }}>
          Notifications
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {unreadCount > 0 && (
            <Button
              size="small"
              onClick={handleMarkAllAsRead}
              sx={{
                textTransform: 'none',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'primary.main',
                px: 1.5,
                py: 0.5,
                minWidth: 'auto',
                '&:hover': {
                  bgcolor: 'primary.lighter',
                },
              }}
            >
              Mark all as read
            </Button>
          )}
          <IconButton
            size="small"
            onClick={handleCloseClick}
            sx={{
              width: 28,
              height: 28,
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'action.hover',
                color: 'text.primary',
              },
            }}
            aria-label="Close notifications"
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Notifications List */}
      <Box
        sx={{
          maxHeight: 420,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: (theme) =>
              theme.palette.mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
            '&:hover': {
              background: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
            },
          },
        }}
      >
        {notifications.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 6,
              px: 2,
            }}
          >
            <NotificationsNoneIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1.5 }} />
            <Typography variant="body2" color="text.secondary">
              No notifications
            </Typography>
          </Box>
        ) : (
          notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <Box
                onClick={(e) => handleNotificationClick(notification.id, e)}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  px: 2.5,
                  py: 1.75,
                  cursor: 'pointer',
                  bgcolor: notification.read ? 'transparent' : 'primary.lighter',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {/* Left Icon - Status Indicator */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 32,
                    height: 32,
                    mr: 1.5,
                    mt: 0.25,
                  }}
                >
                  {notification.read ? (
                    <CheckCircleIcon
                      sx={{
                        fontSize: 20,
                        color: 'text.secondary',
                      }}
                    />
                  ) : (
                    <CircleIcon
                      sx={{
                        fontSize: 20,
                        color: 'primary.main',
                      }}
                    />
                  )}
                </Box>

                {/* Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: notification.read ? 400 : 600,
                      color: 'text.primary',
                      mb: 0.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {notification.message}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                    }}
                  >
                    {formatTimestamp(notification.timestamp)}
                  </Typography>
                </Box>

                {/* Right Action Icon */}
                {!notification.read && (
                  <IconButton
                    size="small"
                    onClick={(e) => handleMarkAsRead(notification.id, e)}
                    sx={{
                      ml: 1,
                      minWidth: 32,
                      width: 32,
                      height: 32,
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.lighter',
                      },
                    }}
                    title="Mark as read"
                  >
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                )}
              </Box>
              {index < notifications.length - 1 && (
                <Divider sx={{ mx: 2.5, borderColor: 'divider' }} />
              )}
            </React.Fragment>
          ))
        )}
      </Box>
    </Menu>
  );
};

export default NotificationMenu;
