import { Credentials, User } from '@/types';
import { DEMO_CREDENTIALS, USER_INFO } from '@/utils/constants';

/**
 * Authentication Service
 * Simulates API calls for authentication
 * In production, these would be real HTTP requests to your backend
 */

/**
 * Simulates a login API call
 * @param credentials - username and password
 * @returns Promise with user data and token
 */
export const loginApi = async (
  credentials: Credentials
): Promise<{ user: User; token: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { username, password } = credentials;

  // Validate credentials against demo data
  if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
    const token = 'demo-jwt-token-' + Date.now();
    const user: User = USER_INFO;

    return { user, token };
  } else {
    throw new Error('Invalid username or password');
  }
};

/**
 * Simulates a logout API call
 * @returns Promise<void>
 */
export const logoutApi = async (): Promise<void> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // In production, this would invalidate the token on the server
  return Promise.resolve();
};

/**
 * Simulates validating a token with the server
 * @param token - JWT token
 * @returns Promise<boolean>
 */
export const validateTokenApi = async (token: string): Promise<boolean> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In production, this would verify the token with the backend
  // For demo purposes, we just check if token exists
  return Promise.resolve(!!token);
};
