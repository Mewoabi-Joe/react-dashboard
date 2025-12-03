# React Dashboard

A fully responsive, modern dashboard application built with React, TypeScript, Redux, Redux-Saga, and Material UI. Features real-time data updates, dark mode support, interactive charts, and comprehensive notification system.

## 🌐 Live Demo

The application is deployed and publicly accessible on Firebase:

**🔗 [https://reactjsdashboard.web.app](https://reactjsdashboard.web.app)**

### Login Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Features

### Core Features

- ✅ **Authentication System**: Secure login/logout functionality with protected routes and session persistence
- ✅ **Real-Time Data Updates**: Dashboard stats and charts update automatically every 5 seconds
- ✅ **Dark Mode Support**: Toggle between light and dark themes with preference persistence
- ✅ **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- ✅ **Material UI**: Modern, professional design system with custom theming
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Redux State Management**: Centralized state with Redux Toolkit
- ✅ **Side Effects**: Redux-Saga for async operations and data fetching
- ✅ **Interactive Charts**: Recharts with hover effects, tooltips, and active states

### Dashboard Features

- ✅ **Stat Cards**: 6 key metrics with real-time updates and percentage change indicators
- ✅ **Interactive Charts**:
  - Development Activity Line Chart with responsive sizing
  - Donut Chart with hover effects and custom tooltips
  - Pie Chart with active state highlighting
- ✅ **Activity Table**:
  - Sortable columns (User, Commit, Date)
  - Delete functionality with confirmation dialog
  - User avatars with images
  - Responsive mobile layout
- ✅ **Notification System**:
  - Real-time notification menu
  - Mark as read / Mark all as read
  - Unread count badge
  - Timestamp formatting
  - Click outside to close with X button

### UI/UX Features

- ✅ **Mobile Navigation**: Hamburger menu drawer for small screens
- ✅ **Theme Toggle**: Quick switch between light/dark modes
- ✅ **Error Boundary**: Graceful error handling with fallback UI
- ✅ **Toast Notifications**: User feedback for actions (login, logout, delete)
- ✅ **Loading States**: Skeleton loaders for better perceived performance
- ✅ **Professional Login Page**: Modern gradient design with improved dark mode support

### Responsive Features

- ✅ **Mobile Optimized**:
  - Stat cards display 2 per row on mobile
  - Reduced padding and font sizes
  - Collapsible navigation drawer
  - Horizontal scrolling tables
  - Optimized chart sizes
- ✅ **Tablet Support**: Adaptive layouts for medium screens
- ✅ **Desktop Experience**: Full-featured layout with all components visible

## Tech Stack

- **React** 19.2.0
- **TypeScript**
- **Redux** 5.0.1 + Redux Toolkit 2.11.0
- **Redux-Saga** 1.4.2
- **React Router** 7.10.0
- **Material UI** 7.3.5
- **Recharts** 3.5.1
- **Vite** 6.4.1

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm 10.x or higher

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to Firebase Hosting

## Project Structure

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── auth/          # Authentication components
│   │   ├── dashboard/     # Dashboard widgets and cards
│   │   │   └── charts/    # Chart components
│   │   ├── layout/        # Layout components (AppBar, Nav, etc.)
│   │   ├── skeletons/     # Loading skeleton components
│   │   ├── ErrorBoundary.tsx  # Error boundary component
│   │   ├── TemplatePage.tsx   # Reusable template page component
│   │   └── Pages.tsx          # Pages component
│   ├── pages/             # Page components
│   ├── redux/
│   │   ├── slices/        # Redux slices
│   │   ├── sagas/         # Redux sagas
│   │   ├── store.ts       # Redux store configuration
│   │   └── rootSaga.ts    # Root saga
│   ├── routes/            # Route configuration
│   ├── styles/            # Theme configuration
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and constants
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Dashboard Features

### Stats Cards

Six key performance indicators displayed in modern card format:

- **New Tickets**: Current ticket count with percentage change
- **Closed Today**: Daily closure metrics
- **New Replies**: Response tracking
- **Followers**: Social metrics with formatted values (e.g., 27.3k)
- **Daily Earnings**: Financial metrics with currency prefix
- **Products**: Inventory count

**Features:**

- Real-time updates every 5 seconds
- Percentage change indicators (green for positive, red for negative)
- Centered value display with label below
- Hover effects and smooth transitions
- Responsive sizing for mobile devices

### Charts

#### Development Activity Line Chart

- Line chart showing purchases over time
- Responsive height and margins
- Custom tooltips with formatted data
- Angled labels on mobile to prevent overlap
- Smooth animations and hover effects

#### Donut Chart

- Interactive hover effects with active state highlighting
- Custom tooltips showing name, value, and percentage
- Legend with formatted labels
- Responsive sizing for all screen sizes

#### Pie Chart

- Percentage labels on slices
- Hover interactivity with active state
- Custom tooltips
- Responsive design

### Activity Table

Comprehensive activity tracking with:

- **Sortable Columns**: Click headers to sort by User, Commit, or Date
- **Delete Functionality**: Remove activities with confirmation dialog
- **User Avatars**: Profile images with fallback to initials
- **Responsive Design**:
  - Mobile: Date column hidden, shown inline with user
  - Horizontal scrolling on small screens
  - Optimized padding and font sizes
- **Toast Notifications**: Success messages on delete

### Layout Components

#### Top Navigation Bar

- **Logo & Branding**: Tabler logo with brand name
- **Source Code Button**: Responsive button for viewing the source code on GitHub
- **Theme Toggle**: Quick switch between light/dark modes
- **Notification Bell**: Badge showing unread count and for viewing notifications
- **User Profile**: Avatar with dropdown menu (Profile, Settings, Logout)
- **Mobile Menu**: Hamburger icon for drawer navigation

#### Secondary Navigation Menu

- Horizontal navigation tabs with icons
- Active route highlighting
- Hidden on mobile (replaced by drawer)
- Icons for each navigation item

#### Navigation Drawer (Mobile)

- Slide-out drawer for mobile navigation
- Full navigation menu with icons
- Active state indicators
- Smooth animations

### Notification System

- **Notification Menu**:
  - Dropdown menu with all notifications
  - Unread/read status indicators
  - Timestamp formatting (e.g., "5 minutes ago")
  - Mark individual or all as read
  - Close button (X) in header
  - Click outside to close
- **Badge Counter**: Real-time unread count on notification icon
- **Visual Indicators**:
  - Circle icon for unread notifications
  - Check icon for read notifications
  - Color-coded backgrounds

## State Management

The application uses Redux Toolkit for state management with the following slices:

### Redux Slices

#### Auth Slice (`authSlice.ts`)

- **State**: `isAuthenticated`, `user`, `loading`, `error`, `token`
- **Actions**:
  - `loginRequest` - Initiate login
  - `loginSuccess` - Handle successful login
  - `loginFailure` - Handle login errors
  - `logout` - Clear authentication state
  - `checkAuthStatus` - Restore session from localStorage

#### Dashboard Slice (`dashboardSlice.ts`)

- **State**: `stats`, `developmentActivity`, `charts`, `loading`, `error`
- **Actions**:
  - `fetchDashboardDataRequest` - Fetch all dashboard data
  - `fetchDashboardDataSuccess` - Update with fetched data
  - `fetchDashboardDataFailure` - Handle fetch errors
  - `updateStatsInPlace` - Real-time stats update (no loading state)
  - `updateChartData` - Real-time chart data update
  - `deleteActivity` - Remove activity from list

#### User Slice (`userSlice.ts`)

- **State**: `notifications`, `unreadCount`
- **Actions**:
  - `setNotifications` - Set notification list
  - `markNotificationAsRead` - Mark single notification as read

### Redux-Saga Operations

- **Login Authentication**: Validates credentials and manages session
- **Dashboard Data Fetching**: Loads initial dashboard data
- **Real-Time Updates**: Automatic data refresh every 5 seconds
- **Error Handling**: Comprehensive error management with user feedback

## Responsive Breakpoints

### Mobile (< 600px / xs)

- Stat cards: 2 per row (xs={6})
- Navigation: Hamburger menu drawer
- Charts: Reduced heights (200px)
- Tables: Horizontal scroll, hidden columns
- Font sizes: Reduced for compact display
- Padding: Minimized for space efficiency

### Tablet (600px - 960px / sm)

- Stat cards: 3-4 per row
- Navigation: Secondary nav visible
- Charts: Medium heights (240px)
- Full table display

### Desktop (> 960px / md, lg)

- Stat cards: Full 6-card row
- Navigation: All menus visible
- Charts: Full heights (280px)
- Optimal spacing and padding

## Real-Time Updates

The dashboard features automatic real-time data updates:

- **Update Interval**: Every 5 seconds
- **Updated Components**:
  - All 6 stat cards (values and percentage changes)
  - Development Activity chart data points
- **Update Method**: Direct Redux state updates (no loading states)
- **Variation Range**:
  - Stats: ±3 for most metrics, ±100 for followers
  - Chart data: ±5 for purchase values
  - Percentage changes: -5% to +5%

## Dark Mode

Comprehensive dark mode support with:

- **Theme Toggle**: Icon button in top navigation bar
- **Persistent Preference**: Saved to localStorage
- **Theme-Aware Components**:
  - All Material UI components
  - Custom charts and cards
  - Login page with gradient backgrounds
  - Notification menu
- **Color Palette**:
  - Light mode: White backgrounds, dark text
  - Dark mode: Dark backgrounds (#0f172a, #1e293b), light text
- **Custom Colors**: Theme-aware success, error, warning colors with lighter variants

## Error Handling

### Error Boundary

- Catches React component errors
- Displays user-friendly error UI
- Shows error details in development mode
- Provides "Try Again" and "Reload Page" options

### Toast Notifications

- Success messages for actions
- Error messages for failures
- Auto-dismiss after 3 seconds
- Positioned at top-right

## Component Architecture

The application follows a modular component structure organized by functionality and purpose.

### Dashboard Components (`components/dashboard/`)

Dashboard-specific widgets and data visualization components:

- **StatCard**: Displays metric value, label, and percentage change with responsive sizing and hover effects
- **StatsGrid**: Container component that displays multiple stat cards in a responsive grid
- **ActivityTable**: Sortable table with delete functionality, responsive mobile layout, and avatar support
- **DashboardContent**: Main content wrapper for dashboard sections with loading states
- **InfoBanner**: Informational banner component for displaying messages
- **SimpleCard**: Basic card component for displaying content
- **SidebarGrid**: Grid layout for sidebar dashboard widgets

#### Chart Components (`components/dashboard/charts/`)

- **DevelopmentActivityChart**: Line chart with responsive design showing purchases over time
- **DonutChart**: Interactive donut chart with hover effects and custom tooltips
- **PieChart**: Interactive pie chart with percentage labels and active state highlighting

### Layout Components (`components/layout/`)

Navigation and layout structure components:

- **TopAppBar**: Main navigation bar with logo, theme toggle, notifications, and user menu
- **SecondaryNavMenu**: Horizontal navigation tabs with icons and active route highlighting
- **NavigationDrawer**: Mobile slide-out drawer for navigation
- **NotificationMenu**: Dropdown notification menu with read/unread status
- **MainLayout**: Page wrapper component with responsive padding
- **DashboardHeader**: Header component for dashboard pages with title display

### Common Components

Shared and utility components used across the application:

- **ErrorBoundary** (`components/ErrorBoundary.tsx`): Catches React component errors and displays fallback UI
- **TemplatePage** (`components/TemplatePage.tsx`): Reusable template component for placeholder pages with consistent layout, icon, title, and description
- **Pages** (`components/Pages.tsx`): Pages component for the pages route

#### Skeleton Components (`components/skeletons/`)

Loading state placeholders:

- **SkeletonCard**: Loading placeholder for card components
- **SkeletonChart**: Loading placeholder for chart components
- **SkeletonTable**: Loading placeholder for table components

### Authentication Components (`components/auth/`)

- **LoginForm**: Professional login form with email/password fields, validation, and error handling

## Development Features

### Code Quality

- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking
- **Error Boundaries**: Graceful error handling

### Performance Optimizations

- **Code Splitting**: Route-based code splitting
- **Memoization**: Optimized re-renders
- **Lazy Loading**: Components loaded on demand
- **Efficient Updates**: Direct state updates for real-time data

### Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling
- **Color Contrast**: WCAG compliant color schemes

## Project Structure

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   │   └── LoginForm.tsx  # Professional login form
│   │   ├── dashboard/         # Dashboard widgets
│   │   │   ├── charts/        # Chart components
│   │   │   │   ├── DevelopmentActivityChart.tsx
│   │   │   │   ├── DonutChart.tsx
│   │   │   │   └── PieChart.tsx
│   │   │   ├── ActivityTable.tsx      # Sortable activity table
│   │   │   ├── DashboardContent.tsx  # Main content wrapper
│   │   │   ├── InfoBanner.tsx
│   │   │   ├── SidebarGrid.tsx
│   │   │   ├── SimpleCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   └── StatsGrid.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── DashboardHeader.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   ├── NavigationDrawer.tsx    # Mobile drawer
│   │   │   ├── NotificationMenu.tsx   # Notification dropdown
│   │   │   ├── SecondaryNavMenu.tsx    # Horizontal nav
│   │   │   └── TopAppBar.tsx          # Main app bar
│   │   ├── skeletons/         # Loading skeleton components
│   │   │   ├── SkeletonCard.tsx
│   │   │   ├── SkeletonChart.tsx
│   │   │   └── SkeletonTable.tsx
│   │   ├── ErrorBoundary.tsx  # Error boundary component
│   │   ├── TemplatePage.tsx   # Reusable template page component
│   │   └── Pages.tsx          # Pages component
│   ├── context/               # React contexts
│   │   └── ThemeContext.tsx   # Theme management
│   ├── pages/                 # Page components
│   ├── redux/
│   │   ├── slices/            # Redux slices
│   │   ├── sagas/             # Redux sagas
│   │   ├── store.ts
│   │   └── rootSaga.ts
│   ├── routes/                # Route configuration
│   ├── services/              # API services
│   ├── styles/                # Theme configuration
│   ├── types/                 # TypeScript definitions
│   └── utils/                 # Utilities and constants
│       ├── constants.ts       # App constants
│       └── mockData.ts        # Mock data generators
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Key Utilities

### Mock Data Generators

- `generateUpdatedStats()`: Creates updated stats with random variations
- `generateUpdatedChartData()`: Updates chart data points
- `formatValue()`: Formats large numbers (e.g., 27300 → 27.3k)

### Theme Utilities

- `getTheme()`: Generates MUI theme based on mode (light/dark)
- Theme context with localStorage persistence

## Deployment

The application is deployed to **Firebase Hosting** and is publicly accessible.

### Live URL

🔗 **https://reactjsdashboard.web.app**

### Deployment Configuration

- **Platform**: Firebase Hosting
- **Project**: reactjsdashboard
- **Build Output**: `dist/` directory
- **SPA Configuration**: All routes redirect to `index.html` for client-side routing

### Deploying Updates

To deploy updates to Firebase:

```bash
npm run deploy
```

This command will:

1. Build the production bundle (`npm run build`)
2. Deploy to Firebase Hosting (`firebase deploy --only hosting`)

### Firebase Configuration Files

- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
