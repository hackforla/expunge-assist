import React from 'react';

import Form from './Form';
import Landing from './pages/Landing';

import { Wrapper, FormWrapper } from '../styles/PersonalStatementContainer';

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

  return (
    <Wrapper background={background} className="PersonalStatementContainer">
      <FormWrapper>
        {pageNumber === 0 ? (
          <Landing goToPage={goToPage} />
        ) : (
          <Form pageNumber={pageNumber} goToPage={goToPage} />
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default PersonalStatement;
