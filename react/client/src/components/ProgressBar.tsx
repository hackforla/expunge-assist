import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface ProgressBarProps {
  percentage: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      '& .MuiLinearProgress-bar': {
        borderRadius: 10,
        backgroundColor: '#9903FF',
      },
    },
    box: {
      width: '100%',
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
