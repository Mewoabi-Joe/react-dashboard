import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';

/**
 * SkeletonTable Component
 * Displays a loading skeleton for table components
 */
const SkeletonTable: React.FC = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        {[1, 2, 3].map((row) => (
          <Box key={row} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Skeleton variant="circular" width={32} height={32} sx={{ mr: 2 }} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="30%" height={20} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="50%" height={20} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="40%" height={20} />
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkeletonTable;
