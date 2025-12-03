import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { NAV_ITEMS } from '@/utils/constants';

const SecondaryNavMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const currentIndex = NAV_ITEMS.findIndex((item) => item.path === currentPath);
  const value = currentIndex >= 0 ? currentIndex : 0;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    const selectedItem = NAV_ITEMS[newValue];
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        mt: 8,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ px: 2 }}
      >
        {NAV_ITEMS.map((item) => (
          <Tab
            key={item.path}
            icon={item.icon}
            iconPosition="start"
            label={item.label}
            sx={{ textTransform: 'none', minHeight: 48 }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SecondaryNavMenu;
