import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core';

const useUtilityStyles = makeStyles<Theme>(
  ({ palette, breakpoints, globals, spacing }) =>
    createStyles({
      primaryContainer: {
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',

        background: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? palette.primary.main : 'white',

        color: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? 'white' : palette.primary.darker,
      },
      buttonContainer: {
        marginTop: 'auto',
        paddingTop: spacing(3),
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      },
      contentContainer: {
        maxWidth: globals.contentWidth,
        minWidth: '300px',
        width: '100%',
        padding: spacing(3),

        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',

        background: ({ pageTheme }: IUseUtilityStyle) => {
          switch (pageTheme) {
            case 'dark':
              return palette.primary.main;
            case 'light':
              return palette.primary.light;
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
              return palette.primary.darker;
          }
        },

        [breakpoints.down('xs')]: {
          marginLeft: 'initial',
          marginRight: 'initial',
          width: '100%',
        },
      },
      disabledColor: {
        color: '#adadad',
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
        color: palette.primary.main,
        fontStyle: 'italic',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
      },
      purpleIcon: {
        color: palette.primary.main,
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
