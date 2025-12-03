import { StatsData, DevelopmentActivityData, ChartData } from '@/types';
import { statsData, developmentActivityData, donutChartData, pieChartData } from '@/utils/mockData';

/**
 * Dashboard Service
 * Simulates API calls for dashboard data
 * In production, these would fetch real data from your backend
 */

interface DashboardData {
  stats: StatsData;
  developmentActivity: DevelopmentActivityData;
  charts: {
    donut: ChartData[];
    pie: ChartData[];
  };
}

/**
 * Fetches all dashboard data
 * @returns Promise with complete dashboard data
 */
export const fetchDashboardDataApi = async (): Promise<DashboardData> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In production, this would be: axios.get('/api/dashboard')
  return {
    stats: statsData,
    developmentActivity: developmentActivityData,
    charts: {
      donut: donutChartData,
      pie: pieChartData,
    },
  };
};

/**
 * Updates stats with fresh data
 * Simulates a partial data refresh
 * @returns Promise with updated stats
 */
export const refreshStatsApi = async (): Promise<StatsData> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Simulate dynamic data updates
  const updatedStats: StatsData = {
    ...statsData,
    newTickets: {
      ...statsData.newTickets,
      value: Math.floor(Math.random() * 100),
      change: Math.floor(Math.random() * 20) - 10,
    },
    closedToday: {
      ...statsData.closedToday,
      value: Math.floor(Math.random() * 50),
      change: Math.floor(Math.random() * 20) - 10,
    },
  };

  return updatedStats;
};
