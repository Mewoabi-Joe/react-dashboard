import React from 'react';
import { Collections as CollectionsIcon } from '@mui/icons-material';
import TemplatePage from '@/components/TemplatePage';

const Gallery: React.FC = () => {
  return (
    <TemplatePage
      title="Gallery"
      description="Browse through our gallery of designs, examples, and visual assets."
      icon={<CollectionsIcon sx={{ fontSize: 40 }} />}
    />
  );
};

export default Gallery;
