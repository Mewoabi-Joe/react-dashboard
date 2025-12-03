import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, Notification } from '@/types';

const initialState: UserState = {
  notifications: [],
  unreadCount: 2,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<Notification[]>) => {
      state.notifications = action.payload;
      state.unreadCount = action.payload.filter((n) => !n.read).length;
    },
    markNotificationAsRead: (state, action: PayloadAction<number>) => {
      const notification = state.notifications.find((n) => n.id === action.payload);
      if (notification) {
        notification.read = true;
        state.unreadCount = state.notifications.filter((n) => !n.read).length;
      }
    },
  },
});

export const { setNotifications, markNotificationAsRead } = userSlice.actions;

export default userSlice.reducer;
