import { createTheme } from '@mui/material/styles';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FDE2E4',  // Light pink
    },
    secondary: {
      main: '#FAD4D8',  // Slightly darker pink
    },
    error: {
      main: '#E57373',  // Default error color
    },
    warning: {
      main: '#F9A8D4',  // Rose pink
    },
    info: {
      main: '#FCE1E4',  // Soft pink
    },
    success: {
      main: '#E58B88',  // Darker pink
    },
    text: {
      primary: '#AD4D63',  // Pink text color
      secondary: '#F4E2E8', // Pinkish gray text
    },
  },
});

export default theme;