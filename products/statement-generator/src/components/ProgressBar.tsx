import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface ProgressBarProps {
  percentage: number;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      height: '8px',
      '& .MuiLinearProgress-bar': {
        borderRadius: 10,
        backgroundColor: theme.palette.primary.main,
      },
    },
    box: {
      width: '95%',
      marginTop: '12px',
      marginBottom: '10px',
    },
  })
);

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <LinearProgress
        className={classes.root}
        variant="determinate"
        value={percentage}
      />
    </div>
  );
};
export default ProgressBar;
