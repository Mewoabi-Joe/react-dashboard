import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from './TopAppBar';
import SecondaryNavMenu from './SecondaryNavMenu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopAppBar />
      <SecondaryNavMenu />
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          py: 4,
          px: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 8, lg: 0 },
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
