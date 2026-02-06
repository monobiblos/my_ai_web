import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5C6BC0',
      light: '#8E99D6',
      dark: '#3949AB',
    },
    secondary: {
      main: '#FF8A65',
      light: '#FFB492',
      dark: '#E64A19',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  spacing: 8,
});

export default theme;
