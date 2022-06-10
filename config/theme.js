import {createTheme} from '@mui/material/styles';
import {ptBR} from '@mui/material/locale';

const theme = createTheme(
  {
    typography: {
      fontFamily: 'Commissioner',
    },
    palette: {
      primary: {
        main: '#202A59',
      },
      secondary: {
        main: '#E83A81',
      },
      error: {
        main: '#E63946',
      },
      background: {
        default: '#E5E5E5',
      },
      success: {
        main: '#1BC47D',
      },
      warning: {
        main: '#FF9500',
      },
      info: {
        main: '#18A0FB',
      },
    },
  },
  ptBR
);

export default theme;
