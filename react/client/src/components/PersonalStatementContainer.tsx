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
  const formStep: string = match.params.step;
  let background;
  console.log(formStep)
  
  const handleClick = () => {
    console.log('click')
    history.push('/form/1')
  }

  const onLandingPage = history.location.pathname=== '/';
  onLandingPage ? background='#9903ff' : background='white';

  return (
    <Wrapper background={background} className="PersonalStatementContainer">
      { onLandingPage && <Header /> }
      <ContentWrapper>
        { onLandingPage ? <Landing handleClick={handleClick}/>
         : 
        <Form formStep={Number(formStep)}/> }
      </ContentWrapper>
    </Wrapper>
  )
}

export default PersonalStatement