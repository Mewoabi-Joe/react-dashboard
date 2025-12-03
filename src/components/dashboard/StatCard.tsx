import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { formatValue } from '@/utils/mockData';

interface StatCardProps {
  label: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, change, prefix = '', suffix = '' }) => {
  const isPositive = change > 0;
  const displayValue = formatValue(value, prefix, suffix);

  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 4px 12px rgba(0,0,0,0.15)'
              : '0 4px 12px rgba(0,0,0,0.5)',
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 1.5, sm: 2.5 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 100, sm: 120 },
          '&:last-child': { pb: { xs: 1.5, sm: 2.5 } },
        }}
      >
        {/* Change indicator at top right */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 12, sm: 16 },
            right: { xs: 12, sm: 16 },
            display: 'inline-flex',
            alignItems: 'center',
            px: { xs: 0.75, sm: 1 },
            py: { xs: 0.375, sm: 0.5 },
            borderRadius: 1,
            bgcolor: isPositive ? 'success.lighter' : 'error.lighter',
          }}
        >
          {isPositive ? (
            <ArrowUpward
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: 'success.main',
                mr: { xs: 0.25, sm: 0.5 },
              }}
            />
          ) : (
            <ArrowDownward
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: 'error.main',
                mr: { xs: 0.25, sm: 0.5 },
              }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              color: isPositive ? 'success.main' : 'error.main',
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.8125rem' },
              lineHeight: 1,
            }}
          >
            {isPositive ? '+' : '-'}
            {Math.abs(change)}%
          </Typography>
        </Box>

        {/* Value centered and largest */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
            lineHeight: 1.2,
            color: 'text.primary',
            mb: { xs: 0.5, sm: 0.75 },
            textAlign: 'center',
          }}
        >
          {displayValue}
        </Typography>

        {/* Label below value */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
