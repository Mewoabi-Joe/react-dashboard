import React from 'react';
import { Layers as LayersIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Interface: React.FC = () => {
  return (
    <TemplatePage
      title="Interface"
      description="Explore interface components and design patterns for building consistent user experiences."
      icon={<LayersIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Interface;
