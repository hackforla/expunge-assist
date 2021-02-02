import React from 'react';
import Button from 'components/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import arrowRight from '../assets/arrowRight.svg';

const useStyles = makeStyles(() =>
  createStyles({
    infoButton: {
      color: '#301934',
    },
    textContent: {
      whiteSpace: 'pre-line',
    },
    alertBox: {
      '& .MuiDialog-paperWidthSm': {
        backgroundColor: '#f7ebff',
      },
    },
  })
);

interface AlertDialogProps {
  title: string;
  info: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ title, info }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="info"
        className={classes.infoButton}
        onClick={handleClickOpen}
      >
        <HelpIcon fontSize="large" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.alertBox}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.textContent}
          >
            {info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={handleClose}>
            <span>OK</span>
            <img src={arrowRight} alt="arrow right" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
