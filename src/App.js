import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'
import { HomeScreen } from './Screens';

const breakpoints = createBreakpoints({})

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '39px',
      textTransform: 'capitalize',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '64px',
        lineHeight: '78px',
      }
    },
    h3: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      textTransform: 'capitalize',
      color: '#000000',
    },
    body1: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#686868',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
        fontWeight: 500,
      }
    },
    someStyle: {
      fontFamily: 'Montserrat,sans-serif',
      textTransform: 'capitalize',
      color: '#000000',
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '0.5px solid #777FEB'
        },
        root: {
          borderRadius: '8px',
          color: '#000',
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: 500,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #777FEB'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #777FEB'
          },
        }
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
