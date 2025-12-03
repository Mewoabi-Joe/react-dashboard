import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Paper, Divider, useTheme, useMediaQuery } from '@mui/material';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartData } from '@/types';

interface PieChartProps {
  data: ChartData[];
  title: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: ChartData;
  }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = payload[0].value;

    return (
      <Paper
        elevation={3}
        sx={{
          p: 1.5,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
          Value: {value}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
          Percentage: {value}%
        </Typography>
      </Paper>
    );
  }
  return null;
};

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const outerRadius = isMobile ? 65 : 85;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ pb: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', pb: { xs: 1.5, sm: 2 }, mb: { xs: 1.5, sm: 2 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: { xs: 200, sm: 240, md: 280 },
            px: { xs: 0.5, sm: 0 },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPie>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={outerRadius}
                paddingAngle={3}
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                labelLine={false}
                activeIndex={activeIndex ?? undefined}
                activeShape={{
                  outerRadius: isMobile ? 70 : 95,
                  stroke: '#206bc4',
                  strokeWidth: 2,
                }}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={isMobile ? 30 : 36}
                iconType="circle"
                iconSize={isMobile ? 8 : 10}
                formatter={(value) => (
                  <span style={{ fontSize: isMobile ? '0.75rem' : '0.875rem', color: '#64748b' }}>{value}</span>
                )}
              />
            </RechartsPie>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PieChart;
