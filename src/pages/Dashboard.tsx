import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';
import DashboardHeader from '@/components/layout/DashboardHeader';
import StatsGrid from '@/components/dashboard/StatsGrid';
import DashboardContent from '@/components/dashboard/DashboardContent';
import SidebarGrid from '@/components/dashboard/SidebarGrid';
import {
  fetchDashboardDataRequest,
  updateStatsInPlace,
  updateChartData,
} from '@/redux/slices/dashboardSlice';
import { RootState } from '@/types';
import { generateUpdatedStats, generateUpdatedChartData } from '@/utils/mockData';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, developmentActivity, charts, loading } = useSelector(
    (state: RootState) => state.dashboard
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Initial data fetch
    dispatch(fetchDashboardDataRequest());
  }, [dispatch]);

  useEffect(() => {
    // Set up real-time updates every 5 seconds
    // Only start interval if we have data
    if (!stats || !developmentActivity) {
      return;
    }

    intervalRef.current = setInterval(() => {
      // Update stats with random variations
      const updatedStats = generateUpdatedStats(stats);
      dispatch(updateStatsInPlace(updatedStats));

      // Update chart data with random variations
      if (developmentActivity.chartData) {
        const updatedChartData = generateUpdatedChartData(developmentActivity.chartData);
        dispatch(updateChartData(updatedChartData));
      }
    }, 5000); // Update every 5 seconds

    // Cleanup interval on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [dispatch, stats, developmentActivity]);

  return (
    <MainLayout>
      <DashboardHeader title="Dashboard" />

      <StatsGrid stats={stats} loading={loading} />

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ alignItems: 'flex-start' }}>
          <DashboardContent developmentActivity={developmentActivity} loading={loading} />
          <SidebarGrid charts={charts} loading={loading} />
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
