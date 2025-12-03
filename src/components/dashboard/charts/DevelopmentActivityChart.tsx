import React from 'react';
import { Card, CardContent, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartDataPoint } from '@/types';

interface DevelopmentActivityChartProps {
  data: ChartDataPoint[];
}

const DevelopmentActivityChart: React.FC<DevelopmentActivityChartProps> = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ pb: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', pb: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
            Development Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Purchases
          </Typography>
        </Box>
        <Box sx={{ width: '100%', height: { xs: 200, sm: 240, md: 280 }, px: { xs: 0.5, sm: 0 } }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: isMobile ? 5 : 10,
                right: isMobile ? 5 : 10,
                left: isMobile ? -15 : -20,
                bottom: isMobile ? 40 : 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: isMobile ? 9 : 11, fill: '#64748b' }}
                stroke="rgba(0,0,0,0.1)"
                interval={0}
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? 'end' : 'middle'}
                height={isMobile ? 60 : 30}
              />
              <YAxis
                tick={{ fontSize: isMobile ? 9 : 11, fill: '#64748b' }}
                stroke="rgba(0,0,0,0.1)"
                width={isMobile ? 30 : 40}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  padding: isMobile ? '6px 10px' : '8px 12px',
                }}
                labelStyle={{
                  fontSize: isMobile ? '0.6875rem' : '0.75rem',
                  marginBottom: '4px',
                }}
              />
              <Line
                type="monotone"
                dataKey="purchases"
                stroke="#206bc4"
                strokeWidth={2}
                dot={{ fill: '#206bc4', r: isMobile ? 2 : 3 }}
                activeDot={{ r: isMobile ? 4 : 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DevelopmentActivityChart;
