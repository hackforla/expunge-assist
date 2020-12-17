import React from 'react';

import Form from './Form'
import Landing from './pages/Landing';

import { Wrapper, FormWrapper } from '../styles/PersonalStatementContainer'

interface PersonalStatementProps {
  history: {
    location: {
      pathname: string
    },
    push: (address: string) => void
  },
  match: {
    params: {
      page: string
    }
  }
}

const PersonalStatement: React.FC<PersonalStatementProps> = ({ history, match }) => {
  let pageNumber: number = Number(match.params.page);
  let background: string;
  if (isNaN(pageNumber)) pageNumber = 0;

  const goToPage = (pageNumber: number) => {
    history.push(`/form/${pageNumber}`)
  }

  pageNumber === 0 ? background='#9903ff' : background='white';

  return (
    <Wrapper background={background} className="PersonalStatementContainer">
      <FormWrapper>
        { pageNumber === 0 ? <Landing goToPage={goToPage}/>
         :
        <Form pageNumber={pageNumber} goToPage={goToPage} /> }
      </FormWrapper>
    </Wrapper>
  )
}

export default PersonalStatement
