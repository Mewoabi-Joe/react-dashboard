import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';

/**
 * SkeletonCard Component
 * Displays a loading skeleton for stat cards while data is being fetched
 * Provides better UX than just a spinner
 */
const SkeletonCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="40%" height={40} sx={{ mb: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton variant="circular" width={16} height={16} sx={{ mr: 0.5 }} />
          <Skeleton variant="text" width={50} height={20} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
