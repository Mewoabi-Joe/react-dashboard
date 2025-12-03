import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardState, StatsData, DevelopmentActivityData, ChartData, ChartDataPoint } from '@/types';

const initialState: DashboardState = {
  stats: null,
  developmentActivity: null,
  charts: null,
  loading: false,
  error: null,
};

interface DashboardData {
  stats: StatsData;
  developmentActivity: DevelopmentActivityData;
  charts: {
    donut: ChartData[];
    pie: ChartData[];
  };
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDashboardDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardDataSuccess: (state, action: PayloadAction<DashboardData>) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.developmentActivity = action.payload.developmentActivity;
      state.charts = action.payload.charts;
      state.error = null;
    },
    fetchDashboardDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStatsRequest: (state) => {
      state.loading = true;
    },
    updateStatsSuccess: (state, action: PayloadAction<StatsData>) => {
      state.loading = false;
      state.stats = action.payload;
    },
    deleteActivity: (state, action: PayloadAction<number>) => {
      if (state.developmentActivity) {
        state.developmentActivity.activities = state.developmentActivity.activities.filter(
          (activity) => activity.id !== action.payload
        );
      }
    },
    updateStatsInPlace: (state, action: PayloadAction<StatsData>) => {
      state.stats = action.payload;
    },
    updateChartData: (state, action: PayloadAction<ChartDataPoint[]>) => {
      if (state.developmentActivity) {
        state.developmentActivity.chartData = action.payload;
      }
    },
  },
});

export const {
  fetchDashboardDataRequest,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
  updateStatsRequest,
  updateStatsSuccess,
  deleteActivity,
  updateStatsInPlace,
  updateChartData,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
