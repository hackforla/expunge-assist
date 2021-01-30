import { Theme, makeStyles, createStyles } from '@material-ui/core';

interface StyleProps {
  theme?: string;
  hasArrow?: boolean; // todo
}

const useUtilityStyles = makeStyles<Theme, StyleProps>((theme) =>
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
    button: {
      color: '#FFFFFF',
      padding: '12px 16px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      display: 'flex',
      border: 'none',
      borderRadius: '24px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.0125em',
      textTrasnform: 'uppercase',
      cursor: 'pointer',
      '& :nth-child(1)': {
        marginRight: '10px',
      },
      background: (props) => (props.theme === 'dark' ? '#25003F' : '#9903FF'),
      '&:hover': {
        background: (props) => (props.theme === 'dark' ? '#330652' : '#a224f7'),
      },
    },
  })
);

export default useUtilityStyles;
