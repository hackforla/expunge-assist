import {
  Theme,
  makeStyles,
  createStyles,
  createMuiTheme,
} from '@material-ui/core';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#F7EBFF',
      main: '#9903FF',
      dark: '#c5b3d1',
      darker: '#25003F',
    },
    warning: {
      main: '#E87461',
    },
    success: {
      main: '#0aeba0',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

const useUtilityStyles = makeStyles<Theme>((theme) =>
  createStyles({
    primaryContainer: {
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',

      background: ({ pageTheme }: IUseUtilityStyle) =>
        pageTheme === 'dark' ? theme.palette.primary.main : 'white',

      color: ({ pageTheme }: IUseUtilityStyle) =>
        pageTheme === 'dark' ? 'white' : '#25003F',
    },
    buttonContainer: {
      marginTop: 'auto',
      paddingTop: '3rem',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    contentContainer: {
      maxWidth: '600px',
      minWidth: '300px',
      width: '100%',
      padding: '18px',

      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',

      background: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return theme.palette.primary.main;
          case 'light':
            return '#f7ebff';
          case 'transparent':
          default:
            return 'transparent';
        }
      },

      color: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return 'white';
          case 'light':
          case 'transparent':
          default:
            return '#25003F';
        }
      },

      [theme.breakpoints.down('xs')]: {
        marginLeft: 'initial',
        marginRight: 'initial',
        width: '100%',
      },
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    buttonRight: {
      marginLeft: 'auto',
    },
    flexGrow: {
      flex: '1 1 auto',
    },
    flexNone: {
      flex: '0 0 auto',
    },
    helpPopup: {
      textAlign: 'right',
    },
    purpleTitle: {
      color: theme.palette.primary.main,
      fontStyle: 'italic',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    purpleIcon: {
      color: theme.palette.primary.main,
      fontSize: '20px',
      marginRight: '0.5rem',
    },
    downloadButtonsContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& button': {
        width: '50%',
        '& svg': {
          marginRight: '1rem',
        },
      },
    },
  })
);

export default useUtilityStyles;
