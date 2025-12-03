export interface User {
  name: string;
  role: string;
  avatar: string;
  avatarUrl?: string;
  email: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface StatData {
  value: number;
  change: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface StatsData {
  newTickets: StatData;
  closedToday: StatData;
  newReplies: StatData;
  followers: StatData;
  dailyEarnings: StatData;
  products: StatData;
}

export interface ChartDataPoint {
  date: string;
  purchases: number;
}

export interface Activity {
  id: number;
  user: string;
  avatar: string;
  avatarUrl?: string;
  commit: string;
  date: string;
}

export interface DevelopmentActivityData {
  chartData: ChartDataPoint[];
  activities: Activity[];
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}

export interface NavItem {
  label: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

export interface Notification {
  id: number;
  message: string;
  read: boolean;
  timestamp: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}

export interface DashboardState {
  stats: StatsData | null;
  developmentActivity: DevelopmentActivityData | null;
  charts: {
    donut: ChartData[];
    pie: ChartData[];
  } | null;
  loading: boolean;
  error: string | null;
}

export interface UserState {
  notifications: Notification[];
  unreadCount: number;
}

export interface RootState {
  auth: AuthState;
  dashboard: DashboardState;
  user: UserState;
}
