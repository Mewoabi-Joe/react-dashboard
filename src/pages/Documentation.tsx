import React from 'react';
import { MenuBook as MenuBookIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Documentation: React.FC = () => {
  return (
    <TemplatePage
      title="Documentation"
      description="Access comprehensive documentation, guides, and code samples to help you build amazing applications."
      icon={<MenuBookIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Documentation;
