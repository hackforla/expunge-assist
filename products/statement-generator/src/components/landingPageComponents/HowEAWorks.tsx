import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import phone from '../../assets/phone.png';
import document from '../../assets/document.png';
import clipboard from '../../assets/clipboard.png';
import { Thumbnail } from './Thumbnail';

const useStyles = makeStyles<Theme>(({ palette, typography, breakpoints }) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      background: palette.secondary.main,
    },
    headingText: {
      color: '#000',
      margin: '0 auto',
      fontFamily: typography.fontFamily,
    },
    purpleText: {
      color: '#9903ff',
    },
    imageContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',

      [breakpoints.down(breakpoints.values.md)]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    imageStyles: {
      width: '100px',
      height: '100px',
      margin: '20px',
    },
  })
);

export const HowEAWorks: React.FC = () => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();
  return (
    <div
      className={`${utilityClasses.contentContainer} ${classes.mainContainer}`}
    >
      <h3 className={classes.headingText}>
        How <span className={classes.purpleText}>Expunge Assist</span> Works
      </h3>
      <div className={classes.imageContainer}>
        <Thumbnail style={classes.imageStyles} src={phone} alt="phone" />
        <Thumbnail style={classes.imageStyles} src={document} alt="document" />
        <Thumbnail
          style={classes.imageStyles}
          src={clipboard}
          alt="clipboard"
        />
      </div>
    </div>
  );
};
