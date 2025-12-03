import React from 'react';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Forms: React.FC = () => {
  return (
    <TemplatePage
      title="Forms"
      description="Discover form components, validation patterns, and best practices for creating user-friendly forms."
      icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Forms;
