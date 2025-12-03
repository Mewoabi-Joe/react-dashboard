import React from 'react';
import { Extension as ExtensionIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Components: React.FC = () => {
  return (
    <TemplatePage
      title="Components"
      description="Browse our collection of reusable UI components and learn how to use them in your projects."
      icon={<ExtensionIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Components;
