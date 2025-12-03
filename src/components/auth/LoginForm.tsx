import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Container,
  SxProps,
  Theme,
} from '@mui/material';
import { loginRequest } from '@/redux/slices/authSlice';
import { RootState } from '@/types';

const textFieldStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    backgroundColor: (theme) =>
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
  },
  '& .MuiInputLabel-root': {
    color: (theme) =>
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    '&.Mui-focused': {
      color: 'primary.main',
    },
    '&.MuiInputLabel-shrink': {
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.87)',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main',
    borderWidth: 2,
  },
  '& .MuiOutlinedInput-input': {
    color: 'text.primary',
  },
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        backgroundImage: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
            : 'linear-gradient(135deg, #1e3a5f 0%, #0f1e3a 100%)',
        backgroundAttachment: 'fixed',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: 'primary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 4px 20px rgba(32, 107, 196, 0.3)'
                  : '0 4px 20px rgba(32, 107, 196, 0.5)',
            }}
          >
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
              T
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 0.5,
            }}
          >
            Welcome back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to continue to Tabler
          </Typography>
        </Box>

        <Card
          sx={{
            maxWidth: 440,
            width: '100%',
            mx: 'auto',
            boxShadow: (theme) =>
              theme.palette.mode === 'light'
                ? '0 8px 32px rgba(0, 0, 0, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.3)',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                  '& .MuiAlert-icon': {
                    alignItems: 'center',
                  },
                }}
              >
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                autoFocus
                sx={textFieldStyles}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                sx={textFieldStyles}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: (theme) =>
                    theme.palette.mode === 'light'
                      ? '0 4px 12px rgba(32, 107, 196, 0.3)'
                      : '0 4px 12px rgba(32, 107, 196, 0.5)',
                  '&:hover': {
                    boxShadow: (theme) =>
                      theme.palette.mode === 'light'
                        ? '0 6px 16px rgba(32, 107, 196, 0.4)'
                        : '0 6px 16px rgba(32, 107, 196, 0.6)',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign in'}
              </Button>
            </Box>

            <Box
              sx={{
                mt: 3,
                pt: 3,
                borderTop: 1,
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
                display="block"
                sx={{ fontSize: '0.8125rem' }}
              >
                Demo credentials
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  mt: 1,
                  fontFamily: 'monospace',
                  bgcolor: 'action.hover',
                  py: 0.75,
                  px: 2,
                  borderRadius: 1,
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                admin / admin123
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginForm;
