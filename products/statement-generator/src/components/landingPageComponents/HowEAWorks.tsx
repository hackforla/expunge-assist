import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import Paragraph from 'components/Paragraph';
import phone from '../../assets/phone.png';
import document from '../../assets/document.png';
import clipboard from '../../assets/clipboard.png';
import { Thumbnail } from './Thumbnail';

const useStyles = makeStyles<Theme>(({ palette, typography, breakpoints }) =>
  createStyles({
    mainContainer: {
      width: '100%',
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
    imagesContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',

      [breakpoints.down(breakpoints.values.md)]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    imageStyles: {
      width: '300px',
      height: '200px',
      margin: '20px',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '150px',
    },
    stepNumber: {
      fontFamily: typography.fontFamily,
      fontSize: '20px',
      color: '#373f41',
      fontWeight: 'bold',
      lineHeight: '24px',
      textAlign: 'center',
      letterSpacing: '0.1px',
    },
    stepText: {
      color: '#373f41',
      lineHeight: '20px',
      textAlign: 'center',
      letterSpacing: '0.2px',
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
      <div className={classes.imagesContainer}>
        <div className={classes.imageContainer}>
          <Thumbnail src={phone} alt="phone" />
          <Paragraph className={classes.stepNumber}>Step 1</Paragraph>
          <Paragraph className={classes.stepText}>Visit Website</Paragraph>
        </div>
        <div className={classes.imageContainer}>
          <Thumbnail src={document} alt="document" />
          <Paragraph className={classes.stepNumber}>Step 2</Paragraph>
          <Paragraph className={classes.stepText}>
            Answer some questions about yourself
          </Paragraph>
        </div>
        <div className={classes.imageContainer}>
          <Thumbnail src={clipboard} alt="clipboard" />
          <Paragraph className={classes.stepNumber}>Step 3</Paragraph>
          <Paragraph className={classes.stepText}>
            Generate a declaration letter
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HowEAWorks;
