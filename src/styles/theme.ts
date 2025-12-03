import { createTheme, PaletteMode } from '@mui/material/styles';

/**
 * Generate theme based on palette mode (light/dark)
 * @param mode - 'light' or 'dark' palette mode
 * @returns MUI theme object
 */
export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#206bc4',
        light: '#4299e1',
        dark: '#1a5490',
        lighter: mode === 'light' ? 'rgba(32, 107, 196, 0.08)' : 'rgba(32, 107, 196, 0.16)',
      },
      secondary: {
        main: '#6c757d',
      },
      success: {
        main: '#2fb344',
        lighter: mode === 'light' ? 'rgba(47, 179, 68, 0.1)' : 'rgba(47, 179, 68, 0.2)',
      },
      error: {
        main: '#d63939',
        lighter: mode === 'light' ? 'rgba(214, 57, 57, 0.1)' : 'rgba(214, 57, 57, 0.2)',
      },
      warning: {
        main: '#f76707',
        lighter: mode === 'light' ? 'rgba(247, 103, 7, 0.1)' : 'rgba(247, 103, 7, 0.2)',
      },
      info: {
        main: '#4299e1',
        lighter: mode === 'light' ? 'rgba(66, 153, 225, 0.1)' : 'rgba(66, 153, 225, 0.2)',
      },
      ...(mode === 'light'
        ? {
            // Light mode colors
            background: {
              default: '#f5f7fb',
              paper: '#ffffff',
            },
            text: {
              primary: '#1e293b',
              secondary: '#64748b',
            },
            divider: 'rgba(0, 0, 0, 0.12)',
          }
        : {
            // Dark mode colors
            background: {
              default: '#0f172a',
              paper: '#1e293b',
            },
            text: {
              primary: '#f1f5f9',
              secondary: '#94a3b8',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
          }),
    },
    typography: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.125rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '0.875rem',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === 'light'
                ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
                : '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === 'light' ? '0 1px 3px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.3)',
          },
        },
      },
    },
  });

// Export default light theme for backwards compatibility
const theme = getTheme('light');
export default theme;
