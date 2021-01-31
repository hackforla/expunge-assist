import { makeStyles, createStyles } from '@material-ui/core';

const useUtilityStyles = makeStyles((theme) =>
  createStyles({
    // I think I named this, but I'd like to rename this better because it's not simply a flexbox container, if anyone has ideas - Alex
    flex: {
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

      [theme.breakpoints.down('xs')]: {
        marginLeft: 'initial',
        marginRight: 'initial',
      },
    },
  })
);

export default useUtilityStyles;
