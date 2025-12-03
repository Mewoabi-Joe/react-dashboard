import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';
import DashboardHeader from '@/components/layout/DashboardHeader';

interface TemplatePageProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ title, description, icon }) => {
  return (
    <MainLayout>
      <DashboardHeader title={title} />

      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            {icon && (
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.lighter',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                  }}
                >
                  {icon}
                </Box>
              </Box>
            )}

            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {title}
            </Typography>

            {description && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
              >
                {description}
              </Typography>
            )}

            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              This page is coming soon. Content will be added here.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
};

export default TemplatePage;

