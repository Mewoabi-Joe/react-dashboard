import React from 'react';
import { Description as DescriptionIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Pages: React.FC = () => {
  return (
    <TemplatePage
      title="Pages"
      description="View example pages and templates to get started with your application."
      icon={<DescriptionIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Pages;
