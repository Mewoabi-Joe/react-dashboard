import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

/**
 * SkeletonChart Component
 * Displays a loading skeleton for chart components
 */
const SkeletonChart: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" width="40%" height={30} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" width="100%" height={300} />
      </CardContent>
    </Card>
  );
};

export default SkeletonChart;
