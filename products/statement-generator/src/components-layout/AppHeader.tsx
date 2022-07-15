import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

import Logo from 'components/Logo';
import { LinkButtonComponent } from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      headerWrapper: {
        height: 60,
        flex: '0 0 auto',
        background: '#fff',
        boxShadow: '0px 9px 13px 0px rgb(0,0,0,0.07)',
        zIndex: 1100,
        position: 'fixed',
        top: 0,
        width: '100%',

        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.lighter,
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },
      appHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        padding: spacing(1, 2),
      },
      rightContainer: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
      },

      headerLink: {
        textDecoration: 'none',
        color: palette.common.black,
        padding: spacing(1),
        fontSize: '16px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',

        '&:hover': {
          color: palette.primary.main,
        },
        '&:active': {
          color: palette.primary.main,
        },

        '&$headerLink + $headerLink': {
          marginLeft: 4,
        },
      },
      linkButtonComponent: {
        padding: '12px 18px !important',
        marginLeft: '15px !important',
      },
    })
);

interface IHeaderLink {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function HeaderLink({ to, children, isActive }: IHeaderLink) {
  const classes = useStyles({});

  return (
    <Link
      className={`${classes.headerLink} ${isActive ? 'active' : ''}`}
      to={to}
    >
      {children}
    </Link>
  );
}

const AppHeader = () => {
  const { t } = useTranslation();
  const { appTheme } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });
  const utilityClasses = useUtilityStyles();

  return (
    <div className={classes.headerWrapper}>
      <div className={`${classes.appHeader} ${utilityClasses.widePage}`}>
        <Logo />

        <div className={classes.rightContainer}>
          <HeaderLink to={AppUrl.Landing}>{t('links.home')}</HeaderLink>
          <HeaderLink to={AppUrl.AboutUs}>{t('links.about_us')}</HeaderLink>
          <HeaderLink to={AppUrl.FAQ}>{t('links.faq')}</HeaderLink>
          <LinkButtonComponent
            to={AppUrl.Welcome}
            buttonText={t('button.startNow')}
            className={classes.linkButtonComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
