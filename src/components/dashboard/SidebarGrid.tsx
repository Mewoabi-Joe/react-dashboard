import React from 'react';
import { GridLegacy as Grid, Box } from '@mui/material';
import DonutChart from './charts/DonutChart';
import PieChart from './charts/PieChart';
import SimpleCard from './SimpleCard';
import SkeletonChart from '@/components/skeletons/SkeletonChart';
import { ChartData } from '@/types';

interface SidebarGridProps {
  charts: {
    donut: ChartData[];
    pie: ChartData[];
  } | null;
  loading?: boolean;
}

const GRID_SPACING = { xs: 2, sm: 2.5, md: 3 };
const SIDEBAR_ITEM_PROPS = { xs: 12, sm: 6, md: 4, lg: 12 };

const SidebarGrid: React.FC<SidebarGridProps> = ({ charts, loading = false }) => {
  if (loading || !charts) {
    return (
      <Grid item xs={12} md={12} lg={4}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item {...SIDEBAR_ITEM_PROPS}>
            <SkeletonChart />
          </Grid>
          <Grid item {...SIDEBAR_ITEM_PROPS}>
            <SkeletonChart />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  const sidebarItems = [
    { type: 'donut', data: charts.donut, title: 'Chart title' },
    { type: 'pie', data: charts.pie, title: 'Chart title' },
    { type: 'card', title: 'New feedback' },
  ];

  return (
    <Grid item xs={12} md={12} lg={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={GRID_SPACING}>
          {sidebarItems.map((item, index) => (
            <Grid item {...SIDEBAR_ITEM_PROPS} key={index}>
              {item.type === 'donut' && (
                <DonutChart data={item.data as ChartData[]} title={item.title} />
              )}
              {item.type === 'pie' && (
                <PieChart data={item.data as ChartData[]} title={item.title} />
              )}
              {item.type === 'card' && <SimpleCard title={item.title} />}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SidebarGrid;
