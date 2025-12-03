import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';
import { Credentials } from '@/types';
import { loginApi } from '@/services/authService';

/**
 * Authentication Saga
 * Handles async authentication operations using Redux-Saga
 *
 * Flow:
 * 1. User dispatches loginRequest action from LoginForm
 * 2. loginSaga intercepts the action
 * 3. Calls loginApi service (simulates backend authentication)
 * 4. On success: stores token/user in localStorage and dispatches loginSuccess
 * 5. On failure: dispatches loginFailure with error message
 */

/**
 * Login Saga
 * Handles user login authentication flow
 * @param action - Redux action containing username and password credentials
 */
function* loginSaga(action: PayloadAction<Credentials>): Generator<any, void, any> {
  try {
    // Call the authentication service
    // Using call() effect makes this testable and allows saga to yield control
    const response: { user: any; token: string } = yield call(loginApi, action.payload);

    // Store authentication data in localStorage for session persistence
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));

    // Dispatch success action to update Redux state
    yield put(loginSuccess({ user: response.user, token: response.token }));

    // Show success notification
    toast.success('Welcome back! Login successful.');
  } catch (error) {
    // Handle any errors from the service layer
    const errorMessage = error instanceof Error ? error.message : 'An error occurred during login';
    yield put(loginFailure(errorMessage));

    // Show error notification
    toast.error(errorMessage);
  }
}

/**
 * Auth Watcher Saga
 * Listens for auth-related actions and delegates to appropriate sagas
 * takeLatest ensures only the most recent login attempt is processed
 * (cancels previous requests if user clicks login multiple times)
 */
export function* watchAuth() {
  yield takeLatest(loginRequest.type, loginSaga);
}
