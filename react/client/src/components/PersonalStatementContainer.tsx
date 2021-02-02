import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Form from './Form';
import Landing from './pages/Landing';

interface StyleProps {
  background?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      background: (props) => props.background,
      color: 'white',
      [theme.breakpoints.up('md')]: {
        height: '850px',
        '& > img': {
          marginLeft: '40px',
        },
      },
      height: '570px',
    },
    formWrapper: {
      [theme.breakpoints.up('md')]: {
        padding: '130px 0 0 130px',
      },
    },
  })
);

interface PersonalStatementProps {
  history: {
    location: {
      pathname: string;
    };
    push: (address: string) => void;
  };
  match: {
    params: {
      page: string;
    };
  };
}

const PersonalStatement = ({ history, match }: PersonalStatementProps) => {
  let pageNumber: number = Number(match.params.page);
  let background: string;
  if (Number.isNaN(pageNumber)) pageNumber = 0;

  const goToPage = (destinationPageNumber: number) => {
    history.push(`/form/${destinationPageNumber}`);
  };

  pageNumber === 0 ? (background = '#9903ff') : (background = 'white');

  const styleProps: StyleProps = { background };
  const classes = useStyles(styleProps);

  return (
    <div className={classes.root}>
      <div className={classes.formWrapper}>
        {pageNumber === 0 ? (
          <Landing goToPage={goToPage} />
        ) : (
          <Form
            pageNumber={pageNumber}
            goToPage={goToPage}
            onChangeAffirmation={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalStatement;
