/* eslint-disable jsx-a11y/anchor-is-valid */
// disabling -- lint is not recognizing that hrefs are being dynamically pulled from i18n translations

import React from 'react';
import { Trans } from 'react-i18next';

import { makeStyles, createStyles } from '@material-ui/core';

import { LaunchOutlined } from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    externalLinkIcon: {
      marginLeft: '2px',
      verticalAlign: 'middle',
    },
    link: {
      color: '#25003F',
    },
  })
);

const DynamicLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { children, ...rest } = props;
  const isExternalLink = rest.href?.startsWith('http') || false;
  const classes = useStyles();

  return (
    <>
      <a className={classes.link} {...rest}>
        {children}
      </a>
      {isExternalLink && (
        <LaunchOutlined fontSize="small" className={classes.externalLinkIcon} />
      )}
    </>
  );
};

export default function DynamicText({ i18nkey }: any) {
  return <Trans i18nKey={i18nkey} components={{ Link: <DynamicLink /> }} />;
}
