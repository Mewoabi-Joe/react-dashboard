import React from 'react';
import { Box, Typography } from '@mui/material';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default DashboardHeader;
