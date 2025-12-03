import React from 'react';
import { Box } from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import InfoBanner from './InfoBanner';
import DevelopmentActivityChart from './charts/DevelopmentActivityChart';
import ActivityTable from './ActivityTable';
import SkeletonChart from '@/components/skeletons/SkeletonChart';
import SkeletonTable from '@/components/skeletons/SkeletonTable';
import { DevelopmentActivityData } from '@/types';

interface DashboardContentProps {
  developmentActivity: DevelopmentActivityData | null;
  loading?: boolean;
}

const GRID_SPACING = { xs: 2, sm: 2.5, md: 3 };

const DashboardContent: React.FC<DashboardContentProps> = ({
  developmentActivity,
  loading = false,
}) => {
  if (loading || !developmentActivity) {
    return (
      <Grid item xs={12} md={12} lg={8}>
        <SkeletonChart />
        <SkeletonTable />
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={12} lg={8}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 3 }}>
          <InfoBanner message="Read our documentation with code samples." />
        </Box>
        <Box sx={{ mb: 3 }}>
          <DevelopmentActivityChart data={developmentActivity.chartData} />
        </Box>
        <Box>
          <ActivityTable activities={developmentActivity.activities} />
        </Box>
      </Box>
    </Grid>
  );
};

export default DashboardContent;
