import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface SimpleCardProps {
  title: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
