import { all } from 'redux-saga/effects';
import { watchAuth } from './sagas/authSaga';
import { watchDashboard } from './sagas/dashboardSaga';

export default function* rootSaga() {
  yield all([watchAuth(), watchDashboard()]);
}
