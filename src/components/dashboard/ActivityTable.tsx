import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TableSortLabel,
} from '@mui/material';
import {
  ArrowUpward,
  ArrowDownward,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Activity } from '@/types';
import { deleteActivity } from '@/redux/slices/dashboardSlice';

interface ActivityTableProps {
  activities: Activity[];
}

type SortField = 'user' | 'commit' | 'date' | null;
type SortDirection = 'asc' | 'desc';

const ActivityTable: React.FC<ActivityTableProps> = ({ activities }) => {
  const dispatch = useDispatch();
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<number | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedActivities = useMemo(() => {
    if (!sortField) return activities;

    return [...activities].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'user':
          aValue = a.user.toLowerCase();
          bValue = b.user.toLowerCase();
          break;
        case 'commit':
          aValue = a.commit.toLowerCase();
          bValue = b.commit.toLowerCase();
          break;
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [activities, sortField, sortDirection]);

  const handleDeleteClick = (id: number) => {
    setActivityToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (activityToDelete !== null) {
      const activity = activities.find((a) => a.id === activityToDelete);
      dispatch(deleteActivity(activityToDelete));
      setDeleteDialogOpen(false);
      setActivityToDelete(null);
      toast.success(
        `Activity by ${activity?.user || 'user'} "${activity?.commit || 'deleted'}" has been removed`
      );
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setActivityToDelete(null);
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUpward sx={{ fontSize: 16 }} /> : <ArrowDownward sx={{ fontSize: 16 }} />;
  };

  return (
    <>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <Box sx={{ px: { xs: 2, sm: 3 }, pt: { xs: 2, sm: 3 }, pb: { xs: 1.5, sm: 2 }, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Recent Activity
            </Typography>
          </Box>
          <TableContainer
            sx={{
              maxHeight: { xs: 400, sm: 'none' },
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: (theme) =>
                  theme.palette.mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
              },
            }}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                      fontWeight: 600,
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      py: { xs: 0.75, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <TableSortLabel
                      active={sortField === 'user'}
                      direction={sortField === 'user' ? sortDirection : 'asc'}
                      onClick={() => handleSort('user')}
                      sx={{
                        fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                        '& .MuiTableSortLabel-icon': {
                          opacity: sortField === 'user' ? 1 : 0.3,
                          fontSize: { xs: 14, sm: 16 },
                        },
                      }}
                    >
                      USER
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                      fontWeight: 600,
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      py: { xs: 0.75, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <TableSortLabel
                      active={sortField === 'commit'}
                      direction={sortField === 'commit' ? sortDirection : 'asc'}
                      onClick={() => handleSort('commit')}
                      sx={{
                        fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                        '& .MuiTableSortLabel-icon': {
                          opacity: sortField === 'commit' ? 1 : 0.3,
                          fontSize: { xs: 14, sm: 16 },
                        },
                      }}
                    >
                      COMMIT
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                      fontWeight: 600,
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      py: { xs: 0.75, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                      display: { xs: 'none', sm: 'table-cell' },
                    }}
                  >
                    <TableSortLabel
                      active={sortField === 'date'}
                      direction={sortField === 'date' ? sortDirection : 'asc'}
                      onClick={() => handleSort('date')}
                      sx={{
                        fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                        '& .MuiTableSortLabel-icon': {
                          opacity: sortField === 'date' ? 1 : 0.3,
                          fontSize: { xs: 14, sm: 16 },
                        },
                      }}
                    >
                      DATE
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      py: { xs: 0.75, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                        fontWeight: 600,
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: { xs: 'none', sm: 'inline' },
                      }}
                    >
                      ACTIONS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedActivities.map((activity) => (
                  <TableRow
                    key={activity.id}
                    hover
                    sx={{
                      '&:last-child td': { borderBottom: 0 },
                    }}
                  >
                    <TableCell sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={activity.avatarUrl}
                          sx={{
                            width: { xs: 28, sm: 32 },
                            height: { xs: 28, sm: 32 },
                            mr: { xs: 1, sm: 2 },
                            bgcolor: 'primary.main',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          }}
                        >
                          {activity.avatar}
                        </Avatar>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {activity.user}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                              display: { xs: 'block', sm: 'none' },
                              mt: 0.25,
                            }}
                          >
                            {activity.date}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2 } }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: { xs: 150, sm: 'none' },
                        }}
                      >
                        {activity.commit}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        py: { xs: 1, sm: 2 },
                        px: { xs: 1, sm: 2 },
                        display: { xs: 'none', sm: 'table-cell' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.8125rem' }}
                      >
                        {activity.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2 } }}>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteClick(activity.id)}
                        sx={{
                          color: 'text.secondary',
                          border: 1,
                          borderColor: 'divider',
                          bgcolor: 'transparent',
                          width: { xs: 28, sm: 32 },
                          height: { xs: 28, sm: 32 },
                          '&:hover': {
                            bgcolor: 'action.hover',
                            borderColor: 'text.primary',
                            color: 'text.primary',
                          },
                        }}
                        aria-label="delete activity"
                      >
                        <DeleteIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete Activity</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this activity? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ActivityTable;
