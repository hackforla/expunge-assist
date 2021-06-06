import { makeStyles, createStyles } from '@material-ui/core';

const useUtilityStyles = makeStyles((theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.up(theme.breakpoints.values.md)]: {
        justifyContent: 'flex-start',
      },
    },
    contentContainer: {
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      maxWidth: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '49px',
      minWidth: '300px',

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
  })
);

export default useUtilityStyles;
