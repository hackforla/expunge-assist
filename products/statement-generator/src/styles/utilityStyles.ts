import { Theme, makeStyles, createStyles } from '@material-ui/core';

const useUtilityStyles = makeStyles<Theme>(
  ({ palette, breakpoints, globals, spacing }) =>
    createStyles({
      primaryContainer: {
        minHeight: '475px',
        width: '100%',
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',
        position: 'relative',

        background: ({ pageTheme }: IUseUtilityStyle) => {
          switch (pageTheme) {
            case 'dark':
              return palette.primary.main;
            case 'pink':
              return palette.primary.lighter;
            case 'transparent':
            default:
              return 'transparent';
          }
        },

        color: ({ pageTheme }: IUseUtilityStyle) => {
          switch (pageTheme) {
            case 'dark':
              return 'white';
            case 'pink':
            case 'transparent':
            default:
              return palette.primary.darker;
          }
        },
      },
      widePage: {
        maxWidth: globals.wideWidth,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        paddingTop: spacing(7),

        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',

        [breakpoints.down('sm')]: {
          padding: spacing(2),
        },

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
      iconButton: {
        cursor: 'pointer',
        color: palette.primary.main,
      },
      formInput: {
        display: 'flex',
        flexDirection: 'column',

        '&$formInput ~ $formInput': {
          marginTop: spacing(4),
        },

        // -- <FormLabel />
        '& .MuiFormLabel-root': {
          lineHeight: 'normal',
          color: palette.common.black,
        },
        '& .MuiFormLabel-root.Mui-disabled': {
          color: palette.common.grey,
        },
        '& .MuiFormLabel-root ~ .MuiInputBase-root': {
          marginTop: spacing(1),
        },
        '& .MuiFormLabel-root ~ .MuiFormGroup-root': {
          marginTop: spacing(1),
        },
        '& .MuiFormLabel-root ~ .MuiFormControl-root': {
          marginTop: spacing(1),
        },
      },
    })
);

export default useUtilityStyles;
