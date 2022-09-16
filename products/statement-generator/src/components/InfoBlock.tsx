import React from 'react';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles<Theme>(({ palette }) =>
  createStyles({
    root: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '8px',
      backgroundColor: '#F0F5FF',
    },
    infoInner: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0px 8px',
      lineHeight: '16px',
      // alignItems: 'center',
    },
    icon: {
      color: '#2F6FED',
    },
    title: {
      fontWeight: 700,
      margin: '4px 0px',
    },
  })
);

interface IInfoBlockComponent {
  className?: string;
  children?: any;
  title?: string;
}

export function InfoBlock({
  className = '',
  children,
  title,
}: IInfoBlockComponent) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`}>
      <InfoIcon className={classes.icon} />
      <div className={classes.infoInner}>
        {title && <div className={classes.title}>{title}</div>}
        {children}
      </div>
    </div>
  );
}

export default InfoBlock;
