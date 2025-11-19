import React from 'react';
import { createStyles, makeStyles, lighten } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import MailIcon from '@material-ui/icons/Mail';
import { useTranslation } from 'react-i18next';
import Button from '../Button';

type Props = {
  onReturn: () => void;
};

const useStyles = makeStyles(({ palette, spacing, breakpoints }) =>
  createStyles({
    paper: {
      borderRadius: 16,
      padding: spacing(6, 4),
      boxShadow: '0 8px 32px rgba(61, 0, 102, 0.15)',
      textAlign: 'center',
    },
    iconWrap: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      backgroundColor: palette.success.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      marginBottom: spacing(4),
      boxShadow: '0 6px 18px rgba(21, 199, 122, 0.18)',
    },
    check: {
      color: '#fff',
      fontSize: '3.5rem',
    },
    title: {
      fontSize: '2rem',
      margin: spacing(0, 0, 3, 0),
      [breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    message: {
      color: palette.common.black,
      fontSize: '1.3rem',
      fontWeight: 400,
      marginBottom: spacing(4),
    },
    returnButton: {
      padding: spacing(1, 4),
      '&:hover': {
        backgroundColor: lighten(palette.primary.main, 0.1),
      },
    },
  })
);

const ThankYou: React.FC<Props> = ({ onReturn }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper
      className={classes.paper}
      elevation={0}
      role="status"
      aria-live="polite"
    >
      <div className={classes.iconWrap}>
        <CheckIcon className={classes.check} />
      </div>

      <Typography component="h2" className={classes.title} gutterBottom>
        {t('contact_us_page.success_header')}
      </Typography>

      <Typography variant="body1" className={classes.message}>
        {t('contact_us_page.success_message')}
      </Typography>

      <Box display="flex" justifyContent="center">
        <Button
          className={classes.returnButton}
          theme="dark"
          icon={<MailIcon style={{ marginRight: 8 }} />}
          buttonText={t('contact_us_page.return_button')}
          onClick={onReturn}
        />
      </Box>
    </Paper>
  );
};

export default ThankYou;
