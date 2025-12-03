import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDashboardDataRequest,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
  updateStatsRequest,
  updateStatsSuccess,
} from '../slices/dashboardSlice';
import { fetchDashboardDataApi, refreshStatsApi } from '@/services/dashboardService';

/**
 * Dashboard Saga
 * Handles async operations for fetching and updating dashboard data
 *
 * Flow:
 * 1. Dashboard component mounts and dispatches fetchDashboardDataRequest
 * 2. fetchDashboardDataSaga intercepts and calls the service layer
 * 3. Service returns mock data (simulating API response)
 * 4. Success: dispatches data to Redux store
 * 5. Failure: dispatches error message
 */

/**
 * Fetch Dashboard Data Saga
 * Retrieves all dashboard data including stats, charts, and activity
 * Called when the dashboard page first loads
 */
function* fetchDashboardDataSaga(): Generator<any, void, any> {
  try {
    // Call dashboard service to fetch all data
    // In production, this would make an HTTP request to your backend
    const data: any = yield call(fetchDashboardDataApi);

    // Dispatch success action with the fetched data
    yield put(fetchDashboardDataSuccess(data));
  } catch (error) {
    // Handle errors and update UI with error state
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch dashboard data';
    yield put(fetchDashboardDataFailure(errorMessage));
  }
}

/**
 * Update Stats Saga
 * Refreshes dashboard statistics with updated values
 * This could be triggered by a refresh button or polling interval
 * Demonstrates partial data updates without refetching everything
 */
function* updateStatsSaga(): Generator<any, void, any> {
  try {
    // Call service to get refreshed stats
    const updatedStats: any = yield call(refreshStatsApi);

    // Dispatch updated stats to Redux store
    yield put(updateStatsSuccess(updatedStats));
  } catch (error) {
    // Handle errors during stats update
    const errorMessage = error instanceof Error ? error.message : 'Failed to update stats';
    yield put(fetchDashboardDataFailure(errorMessage));
  }
}

/**
 * Dashboard Watcher Saga
 * Listens for dashboard-related actions and delegates to appropriate sagas
 * takeLatest cancels any pending requests if a new one comes in
 */
export function* watchDashboard() {
  yield takeLatest(fetchDashboardDataRequest.type, fetchDashboardDataSaga);
  yield takeLatest(updateStatsRequest.type, updateStatsSaga);
}
