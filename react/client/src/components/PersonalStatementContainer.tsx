import React from 'react';

import Header from './Header'
import Form from './Form'
import Landing from './pages/Landing';

import { Wrapper, ContentWrapper } from '../styles/PersonalStatementContainer'

interface PersonalStatementProps {
  history: {
    location: {
      pathname: string
    }, 
    push: (address: string) => void
  },
  match: {
    params: {
      step: string
    }
  }
}

const PersonalStatement: React.FC<PersonalStatementProps> = ({ history, match }) => {
  let formStep: number = Number(match.params.step);
  let background: string;
  if (isNaN(formStep)) formStep = 0;
  console.log(formStep)
  
  const handleClick = () => {
    console.log('click')
    history.push('/form/1')
  }

  formStep === 0 ? background='#9903ff' : background='white';

  return (
    <Wrapper background={background} className="PersonalStatementContainer">
      <Header formStep={formStep} />
      <ContentWrapper>
        { formStep === 0 ? <Landing handleClick={handleClick}/>
         : 
        <Form formStep={formStep}/> }
      </ContentWrapper>
    </Wrapper>
  )
}

export default PersonalStatement