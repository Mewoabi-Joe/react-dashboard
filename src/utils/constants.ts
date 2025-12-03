import React from 'react';
import { NavItem, User, Credentials } from '@/types';
import {
  Home as HomeIcon,
  Layers as LayersIcon,
  Extension as ExtensionIcon,
  Description as DescriptionIcon,
  Assignment as AssignmentIcon,
  Collections as CollectionsIcon,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: React.createElement(HomeIcon, { fontSize: 'small' }) },
  {
    label: 'Interface',
    path: '/interface',
    icon: React.createElement(LayersIcon, { fontSize: 'small' }),
  },
  {
    label: 'Components',
    path: '/components',
    icon: React.createElement(ExtensionIcon, { fontSize: 'small' }),
  },
  {
    label: 'Pages',
    path: '/pages',
    icon: React.createElement(DescriptionIcon, { fontSize: 'small' }),
  },
  {
    label: 'Forms',
    path: '/forms',
    icon: React.createElement(AssignmentIcon, { fontSize: 'small' }),
  },
  {
    label: 'Gallery',
    path: '/gallery',
    icon: React.createElement(CollectionsIcon, { fontSize: 'small' }),
  },
  {
    label: 'Documentation',
    path: '/documentation',
    icon: React.createElement(MenuBookIcon, { fontSize: 'small' }),
  },
];

export const USER_INFO: User = {
  name: 'Jane Pearson',
  role: 'Administrator',
  avatar: 'JP',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  email: 'jane.pearson@example.com',
};

export const DEMO_CREDENTIALS: Credentials = {
  username: 'admin',
  password: 'admin123',
};
