import { StatsData, DevelopmentActivityData, ChartData, Notification } from '@/types';

export const statsData: StatsData = {
  newTickets: {
    value: 43,
    change: 6,
    label: 'New Tickets',
  },
  closedToday: {
    value: 17,
    change: -3,
    label: 'Closed Today',
  },
  newReplies: {
    value: 7,
    change: 9,
    label: 'New Replies',
  },
  followers: {
    value: 27300,
    change: 3,
    label: 'Followers',
  },
  dailyEarnings: {
    value: 95,
    change: -2,
    label: 'Daily earnings',
    prefix: '$',
  },
  products: {
    value: 621,
    change: -1,
    label: 'Products',
  },
};

export const developmentActivityData: DevelopmentActivityData = {
  chartData: [
    { date: 'Jan', purchases: 12 },
    { date: 'Feb', purchases: 25 },
    { date: 'Mar', purchases: 40 },
    { date: 'Apr', purchases: 28 },
    { date: 'May', purchases: 35 },
    { date: 'Jun', purchases: 50 },
    { date: 'Jul', purchases: 45 },
    { date: 'Aug', purchases: 60 },
    { date: 'Sep', purchases: 48 },
    { date: 'Oct', purchases: 55 },
    { date: 'Nov', purchases: 70 },
    { date: 'Dec', purchases: 65 },
  ],
  activities: [
    {
      id: 1,
      user: 'Ronald Bradley',
      avatar: 'RB',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      commit: 'Initial commit',
      date: 'May 6, 2018',
    },
    {
      id: 2,
      user: 'Russell Gibson',
      avatar: 'RG',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      commit: 'Main structure',
      date: 'April 22, 2018',
    },
    {
      id: 3,
      user: 'Beverly Armstrong',
      avatar: 'BA',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      commit: 'Left sidebar adjustments',
      date: 'April 15, 2018',
    },
    {
      id: 4,
      user: 'Sarah Mitchell',
      avatar: 'SM',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      commit: 'Added user authentication',
      date: 'April 10, 2018',
    },
  ],
};

export const donutChartData: ChartData[] = [
  { name: 'Category A', value: 37.6, color: '#2fb344' },
  { name: 'Category B', value: 25.0, color: '#4299e1' },
  { name: 'Category C', value: 37.4, color: '#206bc4' },
];

export const pieChartData: ChartData[] = [
  { name: 'Section 1', value: 47.4, color: '#1e3a5f' },
  { name: 'Section 2', value: 33.1, color: '#4299e1' },
  { name: 'Section 3', value: 9.9, color: '#93c5fd' },
  { name: 'Section 4', value: 9.6, color: '#e0f2fe' },
];

export const formatValue = (value: number, prefix = '', suffix = ''): string => {
  if (value >= 1000) {
    return `${prefix}${(value / 1000).toFixed(1)}k${suffix}`;
  }
  return `${prefix}${value}${suffix}`;
};

/**
 * Generate updated stats with random variations
 * Simulates real-time data updates
 */
export const generateUpdatedStats = (currentStats: StatsData): StatsData => {
  const randomVariation = (value: number, maxChange: number): number => {
    const change = Math.floor(Math.random() * maxChange * 2) - maxChange;
    return Math.max(0, value + change);
  };

  const randomChange = (): number => {
    return Math.floor(Math.random() * 10) - 5; // -5 to +5
  };

  return {
    newTickets: {
      ...currentStats.newTickets,
      value: randomVariation(currentStats.newTickets.value, 3),
      change: randomChange(),
    },
    closedToday: {
      ...currentStats.closedToday,
      value: randomVariation(currentStats.closedToday.value, 2),
      change: randomChange(),
    },
    newReplies: {
      ...currentStats.newReplies,
      value: randomVariation(currentStats.newReplies.value, 2),
      change: randomChange(),
    },
    followers: {
      ...currentStats.followers,
      value: randomVariation(currentStats.followers.value, 100),
      change: randomChange(),
    },
    dailyEarnings: {
      ...currentStats.dailyEarnings,
      value: randomVariation(currentStats.dailyEarnings.value, 5),
      change: randomChange(),
    },
    products: {
      ...currentStats.products,
      value: randomVariation(currentStats.products.value, 5),
      change: randomChange(),
    },
  };
};

/**
 * Generate updated chart data with random variations
 */
export const generateUpdatedChartData = (currentData: ChartDataPoint[]): ChartDataPoint[] => {
  return currentData.map((point) => ({
    ...point,
    purchases: Math.max(0, point.purchases + Math.floor(Math.random() * 10) - 5),
  }));
};

export const mockNotifications: Notification[] = [
  {
    id: 1,
    message: 'New ticket #1234 has been assigned to you',
    read: false,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
  },
  {
    id: 2,
    message: 'You have 3 pending tasks that need attention',
    read: false,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: 3,
    message: 'Weekly report is ready for review',
    read: true,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: 4,
    message: 'System maintenance scheduled for tonight at 11 PM',
    read: false,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  },
  {
    id: 5,
    message: 'Your profile has been updated successfully',
    read: true,
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
  },
];
