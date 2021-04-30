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

      [theme.breakpoints.down('xs')]: {
        marginLeft: 'initial',
        marginRight: 'initial',
      },

      '& .flow-navigation-container': {
        marginTop: 'auto',
      }
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default useUtilityStyles;
