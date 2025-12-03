import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface InfoBannerProps {
  message: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ message }) => {
  return (
    <Card
      sx={{
        bgcolor: 'info.lighter',
        border: '1px solid',
        borderColor: 'info.main',
        boxShadow: 'none',
      }}
    >
      <CardContent
        sx={{
          py: { xs: 1.25, sm: 1.5 },
          px: { xs: 1.5, sm: 2 },
          '&:last-child': { pb: { xs: 1.25, sm: 1.5 } },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MenuBookIcon
            sx={{ color: 'info.main', mr: { xs: 1, sm: 1.5 }, fontSize: { xs: 18, sm: 20 } }}
          />
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}
          >
            {message}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoBanner;
