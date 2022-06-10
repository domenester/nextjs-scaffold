import {AlertProvider} from '@bem/shared/state/alert'
import Alert from '@bem/components/molecules/alert'
import ThemeProvider from '@mui/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@bem/config/theme';

const GlobalProviders = ({children}) => {
  return (
    <AlertProvider>
      <Alert />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AlertProvider>
  )
}

export default GlobalProviders
