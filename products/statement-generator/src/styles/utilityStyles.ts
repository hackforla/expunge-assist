import { Theme, makeStyles, createStyles } from '@material-ui/core';

const useUtilityStyles = makeStyles<Theme>(
  ({ palette, breakpoints, globals, spacing }) =>
    createStyles({
      primaryContainer: {
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',

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

        [breakpoints.down('xs')]: {
          marginLeft: 'initial',
          marginRight: 'initial',
          width: '100%',
        },
      },
      disabledColor: {
        color: palette.common.grey,
      },
      flexColumn: {
        display: 'flex',
        flexDirection: 'column',
      },
      buttonRight: {
        marginLeft: 'auto',
      },
      flexGrow: {
        flex: '1 1 auto',
      },
      helpPopup: {
        textAlign: 'right',
      },
    })
);

export default useUtilityStyles;
