import { Theme, makeStyles, createStyles } from '@material-ui/core';

interface IStyleProps {
  pageTheme?: string;
}

const useUtilityStyles = makeStyles<Theme>((theme) =>
  createStyles({
    primaryContainer: {
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',

      background: ({ pageTheme }: IStyleProps) =>
        pageTheme === 'dark' ? '#9903ff' : 'white',

      color: ({ pageTheme }: IStyleProps) =>
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
      // marginTop: '18px',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',

      background: ({ pageTheme }: IStyleProps) => {
        switch (pageTheme) {
          case 'dark':
            return '#9903ff';
          case 'light':
            return '#f7ebff';
          case 'transparent':
          default:
            return 'transparent';
        }
      },

      color: ({ pageTheme }: IStyleProps) => {
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
      color: '#9903FF',
      fontStyle: 'italic',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    purpleIcon: {
      color: '#9903FF',
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
