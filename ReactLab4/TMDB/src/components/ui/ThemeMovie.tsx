// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
    primary: {
      main: '#212121', // Dark grey
      light: '#484848', // Lighter grey
      dark: '#000000', // Black
    },
    secondary: {
      main: '#424242', // Medium grey
      light: '#757575', // Lighter grey
      dark: '#1b1b1b', // Darker grey
    },
    background: {
      default: '#121212', // Very dark background
      paper: '#1e1e1e', // Slightly lighter paper background
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#e0e0e0', // Light grey text
      disabled: '#bdbdbd', // Disabled text
    },
    error: {
      main: '#f44336', // Red for errors
    },
  },
});

export default theme;

