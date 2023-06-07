import { ThemeOptions, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const font = Roboto({ subsets: ['latin'], weight: '400' })

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          my: 2,
          backgroundColor: 'secondary',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        id: 'outlined-basic',
        size: 'small',
        sx: { my: 1 },
      },
    },
  },
})
