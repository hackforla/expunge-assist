import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

interface IContentContainer {
  children?: any;
  className?: string;
}

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      extraSpace: {
        marginTop: '60px',
      },
    })
);

const ContentContainer = ({ children, className = '' }: IContentContainer) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles({});

  return (
    <div className={`${utilityClasses.contentContainer} ${className} ${classes.extraSpace}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
