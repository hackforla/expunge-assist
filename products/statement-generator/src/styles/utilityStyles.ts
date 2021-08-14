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

      '& .flow-navigation-container': {
        marginTop: 'auto',
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
  })
);

export default useUtilityStyles;
