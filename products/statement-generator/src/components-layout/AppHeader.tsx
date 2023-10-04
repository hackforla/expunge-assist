import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

import Logo from 'components/Logo';
import Button, { FormRouteButton } from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ globals, palette, breakpoints, spacing }) =>
    createStyles({
      headerWrapper: {
        height: globals.headerHeight,
        flex: '0 0 auto',
        background: '#fff',
        zIndex: 1100,
        position: 'fixed',
        top: 0,
        width: '100%',
        boxShadow: '0px 9px 13px 0px rgb(0,0,0,0.07)',
      },
      appHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        zIndex: 1,
        padding: spacing(1, 2),
        [breakpoints.down(breakpoints.values.sm)]: {
          borderBottom: '2px solid #e2e2e2',
        },
      },
      rightContainer: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },
      floatingMenuContainer: {
        marginLeft: 'auto',
        display: 'none',
        flexDirection: 'column',
        background: 'white',
        position: 'fixed',
        left: 0,
        right: 0,
        top: globals.headerHeight,
        padding: spacing(1, 1, 2, 1),
        boxShadow: '0px 9px 13px 0px rgb(0,0,0,0.07)',
        alignItems: 'flex-start',

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'flex',
        },
      },
      menuButton: {
        marginLeft: 'auto',
        display: 'none',
        marginRight: spacing(-2),
        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'block',
        },
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

        [breakpoints.up(breakpoints.values.sm)]: {
          '&$headerLink + $headerLink': {
            marginLeft: 4,
          },
        },
      },
      linkButtonComponent: {
        padding: spacing(1, 2),

        [breakpoints.up(breakpoints.values.sm)]: {
          marginLeft: '15px',
        },
        [breakpoints.down(breakpoints.values.sm)]: {
          marginTop: spacing(1),
        },
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
  const { appTheme, currentStep } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });
  const utilityClasses = useUtilityStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const startNowButtonHandler = () => {
    if (
      currentStep === '' ||
      currentStep === '/about-us' ||
      currentStep === '/privacy-policy' ||
      currentStep === '/terms-of-use' ||
      currentStep === '/faq'
    ) {
      return (
        <FormRouteButton
          appUrl={AppUrl.Welcome}
          buttonText={t('button.startNow')}
          className={classes.linkButtonComponent}
        />
      );
    }
    return null;
  };

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [currentStep]);

  return (
    <div className={classes.headerWrapper}>
      <div className={`${classes.appHeader} ${utilityClasses.widePage}`}>
        <Logo />

        <div className={classes.rightContainer}>
          <HeaderLink to={AppUrl.Landing}>{t('links.home')}</HeaderLink>
          <HeaderLink to={AppUrl.AboutUs}>{t('links.about_us')}</HeaderLink>
          <HeaderLink to={AppUrl.FAQ}>{t('links.faq')}</HeaderLink>
          {startNowButtonHandler()}
        </div>

        <Button
          className={classes.menuButton}
          theme="transparent-on-light"
          icon={isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />

        {isMenuOpen && (
          <div className={classes.floatingMenuContainer}>
            <HeaderLink to={AppUrl.Landing}>{t('links.home')}</HeaderLink>
            <HeaderLink to={AppUrl.AboutUs}>{t('links.about_us')}</HeaderLink>
            <HeaderLink to={AppUrl.FAQ}>{t('links.faq')}</HeaderLink>
            {startNowButtonHandler()}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
