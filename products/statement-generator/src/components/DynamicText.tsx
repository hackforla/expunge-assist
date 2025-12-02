/* eslint-disable jsx-a11y/anchor-is-valid */
// disabling -- lint is not recognizing that hrefs are being dynamically pulled from i18n translations

import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles, createStyles, Tooltip, Theme } from '@material-ui/core';
import { LaunchOutlined } from '@material-ui/icons';
import {
  getNormalizedHost,
  getPublisherName,
} from 'helpers/linkPublisherHelper';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    externalLinkIcon: {
      marginLeft: theme.spacing(0.25), // 2px with 8px base
      verticalAlign: 'middle',
    },
    link: {
      color: theme.palette.primary.darker,
    },
    tooltip: {
      backgroundColor: theme.palette.primary.darker,
      color: theme.palette.common.white,
      fontSize: theme.typography.fontSize,
      padding: theme.spacing(0.75, 1.5), // 6px 12px with 8px base
      boxShadow: '0px 4px 8px rgba(0,0,0,0.25)',
      textAlign: 'center',
    },
  })
);

export const DynamicLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const { children, href, ...rest } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const isExternalLink = href?.startsWith('http') || false;
  const host = href ? getNormalizedHost(href) : null;
  const publisher = getPublisherName(t, host);
  const showTooltip = isExternalLink && !!publisher;

  const anchor = (
    <a className={classes.link} href={href} {...rest}>
      {children}
    </a>
  );

  const externalIcon = isExternalLink ? (
    <LaunchOutlined fontSize="small" className={classes.externalLinkIcon} />
  ) : null;

  const linkContent = (
    <>
      {anchor}
      {externalIcon}
    </>
  );

  return showTooltip ? (
    <Tooltip
      title={`Publisher: ${publisher}`}
      classes={{ tooltip: classes.tooltip }}
    >
      <span>{linkContent}</span>
    </Tooltip>
  ) : (
    linkContent
  );
};

interface DynamicTextProps {
  i18nkey: string;
}

export default function DynamicText({ i18nkey }: DynamicTextProps) {
  return <Trans i18nKey={i18nkey} components={{ Link: <DynamicLink /> }} />;
}
