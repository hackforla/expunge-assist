import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import iconBlack from '../assets/iconBlack.svg';
import iconWhite from '../assets/iconWhite.svg';

interface StyleProps {
  background?: string;
  color?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      background: (props) => props.background,
      color: (props) => props.color,
      display: 'flex',
      '& .logo-title': {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        textTransform: 'uppercase',
        fontSize: '12px',
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
          display: 'none',
        },
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
  })
);

interface HeaderProps {
  pageNumber: number;
}

const Header = ({ pageNumber }: HeaderProps) => {
  let icon: string;
  let background: string;
  let color: string;

  if (pageNumber === 0) {
    background = '#9903ff';
    color = 'white';
    icon = iconWhite;
  } else {
    background = 'white';
    color = 'black';
    icon = iconBlack;
  }

  const styleProps = {
    background,
    color,
  };

  const classes = useStyles(styleProps);

  return (
    <div className={`${classes.root} app-header`}>
      <img src={icon} alt="" />
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color,
        }}
        className="logo-title"
      >
        <p>The Record</p>
        <p>Clearance Project</p>
      </Link>
    </div>
  );
};

export default Header;
