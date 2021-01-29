import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    // I think I named this, but I'd like to name this better because it's not simply a flexbox container - Alex
    flex: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.up(theme.breakpoints.values.md)]: {
        justifyContent: 'flex-start',
      },
    },
  })
);

export { useStyles };
