import React from 'react';
import { GridLegacy as Grid } from '@mui/material';
import StatCard from './StatCard';
import SkeletonCard from '@/components/skeletons/SkeletonCard';
import { StatsData } from '@/types';

interface StatsGridProps {
  stats: StatsData | null;
  loading?: boolean;
}

const GRID_SPACING = { xs: 1.5, sm: 2.5, md: 3 };
const GRID_ITEM_PROPS = { xs: 6, sm: 6, md: 6, lg: 4, xl: 2 };

const StatsGrid: React.FC<StatsGridProps> = ({ stats, loading = false }) => {
  if (loading || !stats) {
    return (
      <Grid container spacing={GRID_SPACING}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Grid item {...GRID_ITEM_PROPS} key={i}>
            <SkeletonCard />
          </Grid>
        ))}
      </Grid>
    );
  }

  const statItems = [
    stats.newTickets,
    stats.closedToday,
    stats.newReplies,
    stats.followers,
    stats.dailyEarnings,
    stats.products,
  ];

  return (
    <Grid container spacing={GRID_SPACING}>
      {statItems.map((stat, index) => (
        <Grid item {...GRID_ITEM_PROPS} key={index}>
          <StatCard
            label={stat.label}
            value={stat.value}
            change={stat.change}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsGrid;
